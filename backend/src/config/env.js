require('dotenv').config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5001),
  host: process.env.HOST || '127.0.0.1',
  jwtSecret: process.env.JWT_SECRET || 'dev-only-change-me',
  databaseStorage: process.env.DATABASE_STORAGE || './data/ssh-gr32.sqlite',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5176',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  openaiModel: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  redisUrl: process.env.REDIS_URL || ''
};

module.exports = { env };
