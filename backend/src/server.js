const { createApp } = require('./app');
const { sequelize } = require('./models');
const { env } = require('./config/env');

async function start() {
  await sequelize.authenticate();
  await sequelize.sync();

  createApp().listen(env.port, env.host, () => {
    console.log(`SSH Gr32 API running on http://${env.host}:${env.port}`);
    console.log(`Swagger UI: http://${env.host}:${env.port}/api-docs`);
  });
}

start().catch((error) => {
  console.error('Failed to start API', error);
  process.exit(1);
});
