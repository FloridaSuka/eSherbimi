const express = require('express');
const { AuthController } = require('../controllers/authController');
const { AiController } = require('../controllers/aiController');
const { ServiceResourceController } = require('../controllers/serviceResourceController');
const { SystemController } = require('../controllers/systemController');
const { AuthMiddleware } = require('../middleware/auth');
const { models, serviceDefinitions } = require('../models');
const { CacheService } = require('../services/cacheService');
const { BackgroundQueue } = require('../services/backgroundQueue');

function buildRouter() {
  const router = express.Router();
  const auth = new AuthController();
  const cache = new CacheService();
  const queue = new BackgroundQueue();
  const ai = new AiController(queue);
  const system = new SystemController(queue);

  router.get('/health', system.health);
  router.post('/auth/register', auth.register);
  router.post('/auth/login', auth.login);
  router.get('/auth/me', AuthMiddleware.authenticate, auth.me);

  router.post('/ai/chat', AuthMiddleware.authenticate, ai.chat);
  router.post('/ai/analyze', AuthMiddleware.authenticate, ai.analyze);
  router.get('/ai/history', AuthMiddleware.authenticate, AuthMiddleware.authorize('admin', 'manager'), ai.history);
  router.get('/jobs', AuthMiddleware.authenticate, AuthMiddleware.authorize('admin', 'manager'), system.jobs);

  serviceDefinitions.forEach((definition) => {
    const controller = new ServiceResourceController(models[definition.publicName], cache);
    const base = `/services/${definition.key}`;
    router.get(base, AuthMiddleware.authenticate, controller.list);
    router.post(base, AuthMiddleware.authenticate, controller.create);
    router.get(`${base}/:id`, AuthMiddleware.authenticate, controller.get);
    router.put(`${base}/:id`, AuthMiddleware.authenticate, controller.update);
    router.delete(`${base}/:id`, AuthMiddleware.authenticate, AuthMiddleware.authorize('admin', 'manager'), controller.remove);
  });

  return router;
}

module.exports = { buildRouter };
