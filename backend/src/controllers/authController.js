const { AuthService } = require('../services/authService');

class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.me = this.me.bind(this);
  }

  async register(req, res, next) {
    try {
      res.status(201).json(await this.authService.register(req.body));
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      res.json(await this.authService.login(email, password));
    } catch (error) {
      next(error);
    }
  }

  me(req, res) {
    res.json({
      id: req.user.id,
      tenantId: req.user.tenantId,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    });
  }
}

module.exports = { AuthController };
