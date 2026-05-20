const path = require('path');
const { Sequelize } = require('sequelize');
const { env } = require('./env');

const storage = env.nodeEnv === 'test'
  ? ':memory:'
  : path.resolve(process.cwd(), env.databaseStorage);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: env.nodeEnv === 'development' ? console.log : false
});

module.exports = { sequelize };
