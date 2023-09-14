require('dotenv').config();
const { Sequelize } = require('sequelize');
const {
  factory,
  default: DIContainer,
  object,
  use,
} = require('rsdi');
const {
  UserController,
  UserService,
  UserRepository,
  UserModel,
} = require('../module/user/module');
const { CarModel } = require('../module/car/module');

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

const configureCarModel = (container) => {
  CarModel.setup(container.get('Sequelize'));
  return CarModel;
};

const addCommonDefinitions = (container) => {
  container.add({
    Sequelize: factory(configureSequelize),
  });
};

const addUserModuleDefinitions = (container) => {
  container.add({
    UserController: object(UserController).construct(use('UserService')),
    UserService: object(UserService).construct(use('UserRepository')),
    UserRepository: object(UserRepository).construct(use('UserModel')),
    UserModel: factory(configureUserModel),
  });
};

const addCarModuleDefinitions = (container) => {
  container.add({
    CarModel: factory(configureCarModel),
  });
};

const configureDI = () => {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addUserModuleDefinitions(container);
  addCarModuleDefinitions(container);
  return container;
};

module.exports = {
  HOST: process.env.SERVER_HOST,
  PORT: process.env.SERVER_PORT,
  configureDI,
};
