const express = require('express');

const routes = express.Router();

const carRoutes = (container) => {
  const controller = container.get('CarController');
  routes.get('/car', controller.getAll.bind(controller));
  routes.get('/car/:id', controller.getCar.bind(controller));
  routes.post('/car', controller.save.bind(controller));
  routes.delete('/car/:id', controller.delete.bind(controller));
  return routes;
};

module.exports = carRoutes;
