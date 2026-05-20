const { Op } = require('sequelize');
const { HttpError } = require('../utils/errors');

class ServiceResourceService {
  constructor(model, cache) {
    this.model = model;
    this.cache = cache;
  }

  async list({ tenantId, query }) {
    const cacheKey = `${this.model.tableName}:${tenantId}:${JSON.stringify(query)}`;
    const cached = await this.cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const where = this.buildWhere(tenantId, query);
    const limit = Math.min(Number(query.limit || 20), 100);
    const offset = Math.max(Number(query.offset || 0), 0);
    const result = await this.model.findAndCountAll({ where, limit, offset, order: [['createdAt', 'DESC']] });
    await this.cache.set(cacheKey, result, 30);
    return result;
  }

  async getById({ tenantId, id }) {
    const record = await this.model.findOne({ where: { id, tenantId } });
    if (!record) {
      throw new HttpError(404, 'Record not found');
    }
    return record;
  }

  async create({ tenantId, userId, payload }) {
    const record = await this.model.create({
      tenantId,
      createdById: userId,
      referenceNo: payload.referenceNo || `${this.model.tableName.toUpperCase()}-${Date.now()}`,
      title: payload.title,
      status: payload.status || 'submitted',
      amount: payload.amount || 0,
      metadata: payload.metadata || {}
    });
    return record;
  }

  async update({ tenantId, id, payload }) {
    const record = await this.getById({ tenantId, id });
    await record.update(payload);
    return record;
  }

  async remove({ tenantId, id }) {
    const record = await this.getById({ tenantId, id });
    await record.destroy();
    return { deleted: true };
  }

  buildWhere(tenantId, query) {
    const where = { tenantId };
    if (query.status) {
      where.status = query.status;
    }
    if (query.q) {
      where[Op.or] = [
        { title: { [Op.like]: `%${query.q}%` } },
        { referenceNo: { [Op.like]: `%${query.q}%` } }
      ];
    }
    return where;
  }
}

module.exports = { ServiceResourceService };
