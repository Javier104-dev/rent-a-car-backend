const { Sequelize } = require('sequelize');
const { factory, default: DIContainer } = require('rsdi');
const { UserModel } = require('../module/user/module');

require('dotenv').config();

const configureSequelize = () => {
  const config = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      dialect: process.env.SEQUELIZE_DIALECT,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  );
  return config;
};

const configureUserModel = (container) => {
  UserModel.setup(container.get('Sequelize'));
  return UserModel;
};

const addCommonDefinitions = (container) => {
  container.add({
    Sequelize: factory(configureSequelize),
  });
};

const addUserModuleDefinitions = (container) => {
  container.add({
    UserModel: factory(configureUserModel),
  });
};

const configureDI = () => {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addUserModuleDefinitions(container);
  return container;
};

module.exports = {
  HOST: process.env.SERVER_HOST,
  PORT: process.env.SERVER_PORT,
  configureDI,
};
