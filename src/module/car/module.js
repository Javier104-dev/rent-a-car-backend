const CarController = require('./controller/carController');
const CarService = require('./service/carService');
const CarRepository = require('./repository/carRepository');
const CarModel = require('./model/carModel');
const carRoutes = require('./routes/carRoutes');

const initCarModule = (app, container) => {
  app.use(carRoutes(container));
};

module.exports = {
  CarController,
  CarService,
  CarRepository,
  CarModel,
  initCarModule,
};
