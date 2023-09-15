const express = require('express');

const routes = express.Router();

const carRoutes = (container) => {
  const controller = container.get('CarController');
  routes.get('/cars', controller.getAll.bind(controller));
  routes.get('/cars/:id', controller.getCar.bind(controller));
  routes.post('/cars', controller.save.bind(controller));
  routes.delete('/cars/:id', controller.delete.bind(controller));
  return routes;
};

module.exports = carRoutes;
