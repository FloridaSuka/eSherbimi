const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const { env } = require('./config/env');
const { buildRouter } = require('./routes');
const { buildSwaggerDocument } = require('./swagger');
const { requestLogger } = require('./middleware/requestLogger');
const { notFound, errorHandler } = require('./middleware/errorHandler');

function createApp() {
  const app = express();
  const allowedOrigins = new Set([
    env.clientOrigin,
    'http://localhost:5176',
    'http://127.0.0.1:5176',
    'http://localhost:5175',
    'http://127.0.0.1:5175',
    'http://localhost:5174',
    'http://127.0.0.1:5174'
  ]);

  app.use(helmet());
  app.use(cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true
  }));
  app.use(express.json({ limit: '1mb' }));
  app.use(rateLimit({ windowMs: 60 * 1000, limit: 120 }));
  app.use(requestLogger);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(buildSwaggerDocument()));
  app.use('/api', buildRouter());
  app.use(notFound);
  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
