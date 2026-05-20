const NodeCache = require('node-cache');
const Redis = require('ioredis');
const { env } = require('../config/env');

class CacheService {
  constructor() {
    this.memory = new NodeCache({ stdTTL: 60, checkperiod: 120 });
    this.redis = env.redisUrl ? new Redis(env.redisUrl, { lazyConnect: true, maxRetriesPerRequest: 1 }) : null;
  }

  async get(key) {
    if (this.redis) {
      try {
        const cached = await this.redis.get(key);
        return cached ? JSON.parse(cached) : null;
      } catch (_) {
        return this.memory.get(key) || null;
      }
    }
    return this.memory.get(key) || null;
  }

  async set(key, value, ttlSeconds = 60) {
    if (this.redis) {
      try {
        await this.redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
        return;
      } catch (_) {
        this.memory.set(key, value, ttlSeconds);
        return;
      }
    }
    this.memory.set(key, value, ttlSeconds);
  }

  async del(key) {
    this.memory.del(key);
    if (this.redis) {
      try {
        await this.redis.del(key);
      } catch (_) {
        // Memory cache already cleared.
      }
    }
  }
}

module.exports = { CacheService };
