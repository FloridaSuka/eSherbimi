const { ServiceResourceService } = require('../services/serviceResourceService');

class ServiceResourceController {
  constructor(model, cache) {
    this.service = new ServiceResourceService(model, cache);
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async list(req, res, next) {
    try {
      res.json(await this.service.list({ tenantId: req.tenantId, query: req.query }));
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      res.json(await this.service.getById({ tenantId: req.tenantId, id: req.params.id }));
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const record = await this.service.create({ tenantId: req.tenantId, userId: req.user.id, payload: req.body });
      res.status(201).json(record);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      res.json(await this.service.update({ tenantId: req.tenantId, id: req.params.id, payload: req.body }));
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      res.json(await this.service.remove({ tenantId: req.tenantId, id: req.params.id }));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { ServiceResourceController };
