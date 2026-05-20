const OpenAI = require('openai');
const { env } = require('../config/env');
const { models } = require('../models');

class OpenAiService {
  constructor() {
    this.client = env.openaiApiKey ? new OpenAI({ apiKey: env.openaiApiKey }) : null;
  }

  async chat({ tenantId, userId, message }) {
    const response = this.client
      ? await this.callOpenAI(message)
      : this.localFallback(message);

    const interaction = await models.AiInteraction.create({
      tenantId,
      userId,
      prompt: message,
      response,
      model: env.openaiModel
    });

    return { id: interaction.id, response, model: env.openaiModel };
  }

  async analyze({ tenantId, userId, text }) {
    const prompt = `Analyze this text and return a short operational summary:\n\n${text}`;
    return this.chat({ tenantId, userId, message: prompt });
  }

  async callOpenAI(message) {
    const completion = await this.client.chat.completions.create({
      model: env.openaiModel,
      messages: [
        { role: 'system', content: 'You are an assistant for Kosovo electronic public services. Be concise and practical.' },
        { role: 'user', content: message }
      ]
    });

    return completion.choices[0]?.message?.content || '';
  }

  localFallback(message) {
    return `OpenAI API key is not configured. Local fallback summary: ${message.slice(0, 240)}`;
  }
}

module.exports = { OpenAiService };
