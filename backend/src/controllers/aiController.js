const { OpenAiService } = require('../services/openAiService');

class AiController {
  constructor(queue) {
    this.ai = new OpenAiService();
    this.queue = queue;
    this.chat = this.chat.bind(this);
    this.analyze = this.analyze.bind(this);
    this.history = this.history.bind(this);
  }

  async chat(req, res, next) {
    try {
      const job = this.queue.enqueue('ai.chat', () => this.ai.chat({
        tenantId: req.tenantId,
        userId: req.user.id,
        message: req.body.message
      }));
      res.status(202).json(job);
    } catch (error) {
      next(error);
    }
  }

  async analyze(req, res, next) {
    try {
      const job = this.queue.enqueue('ai.analyze', () => this.ai.analyze({
        tenantId: req.tenantId,
        userId: req.user.id,
        text: req.body.text
      }));
      res.status(202).json(job);
    } catch (error) {
      next(error);
    }
  }

  async history(req, res, next) {
    try {
      const rows = await require('../models').models.AiInteraction.findAll({
        where: { tenantId: req.tenantId },
        order: [['createdAt', 'DESC']],
        limit: 30
      });
      res.json(rows);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { AiController };
