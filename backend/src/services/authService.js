const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { models } = require('../models');
const { env } = require('../config/env');
const { HttpError } = require('../utils/errors');

class AuthService {
  async register(payload) {
    const { tenantName, tenantSlug, name, email, password, role = 'citizen' } = payload;

    if (!tenantName || !tenantSlug || !name || !email || !password) {
      throw new HttpError(400, 'tenantName, tenantSlug, name, email and password are required');
    }

    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) {
      throw new HttpError(409, 'Email is already registered');
    }

    const [tenant] = await models.Tenant.findOrCreate({
      where: { slug: tenantSlug },
      defaults: { name: tenantName, slug: tenantSlug }
    });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await models.User.create({ tenantId: tenant.id, name, email, passwordHash, role });

    return this.publicSession(user);
  }

  async login(email, password) {
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      throw new HttpError(401, 'Invalid email or password');
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      throw new HttpError(401, 'Invalid email or password');
    }

    return this.publicSession(user);
  }

  publicSession(user) {
    const token = jwt.sign(
      { sub: user.id, tenantId: user.tenantId, role: user.role },
      env.jwtSecret,
      { expiresIn: '8h' }
    );

    return {
      token,
      user: {
        id: user.id,
        tenantId: user.tenantId,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  }
}

module.exports = { AuthService };
