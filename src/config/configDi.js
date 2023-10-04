const {
  factory,
  default: DIContainer,
  object,
  use,
} = require('rsdi');
const configureSequelize = require('./configDb');
const {
  UserController,
  UserService,
  UserRepository,
  UserModel,
} = require('../module/user/module');
const {
  CarController,
  CarService,
  CarRepository,
  CarModel,
} = require('../module/car/module');
const {
  ReservationController,
  ReservationService,
  ReservationRepository,
  ReservationModel,
} = require('../module/reservation/module');

const configureUserModule = (container) => UserModel.setup(container.get('Sequelize'));

const configureCarModule = (container) => CarModel.setup(container.get('Sequelize'));

const configureReservationModule = (container) => {
  const model = ReservationModel.setup(container.get('Sequelize'));
  model.setupAssociations(container.get('CarModel'), container.get('UserModel'));
  return model;
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
    UserModel: factory(configureUserModule),
  });
};

const addCarModuleDefinitions = (container) => {
  container.add({
    CarController: object(CarController).construct(use('CarService')),
    CarService: object(CarService).construct(use('CarRepository')),
    CarRepository: object(CarRepository).construct(use('CarModel')),
    CarModel: factory(configureCarModule),
  });
};

const addReservationModuleDefinitions = (container) => {
  container.add({
    ReservationController: object(ReservationController).construct(
      use('ReservationService'),
      use('CarService'),
      use('UserService'),
    ),
    ReservationService: object(ReservationService).construct(use('ReservationRepository')),
    ReservationRepository: object(ReservationRepository).construct(use('ReservationModel')),
    ReservationModel: factory(configureReservationModule),
  });
};

const configureDI = () => {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addUserModuleDefinitions(container);
  addCarModuleDefinitions(container);
  addReservationModuleDefinitions(container);
  return container;
};

module.exports = configureDI;
