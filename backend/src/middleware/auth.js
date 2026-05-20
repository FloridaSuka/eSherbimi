const jwt = require('jsonwebtoken');
const { env } = require('../config/env');
const { models } = require('../models');

class AuthMiddleware {
  static async authenticate(req, res, next) {
    const header = req.headers.authorization || '';
    const [, token] = header.split(' ');

    if (!token) {
      return res.status(401).json({ message: 'Authentication token is required' });
    }

    try {
      const payload = jwt.verify(token, env.jwtSecret);
      const user = await models.User.findByPk(payload.sub);

      if (!user) {
        return res.status(401).json({ message: 'User no longer exists' });
      }

      req.user = user;
      req.tenantId = user.tenantId;
      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  }

  static authorize(...roles) {
    return (req, res, next) => {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'You do not have permission for this action' });
      }
      return next();
    };
  }
}

module.exports = { AuthMiddleware };
