const express = require('express');

const routes = express.Router();

const userRoutes = (container) => {
  const controller = container.get('UserController');
  routes.get('/users', controller.getAll.bind(controller));
  routes.get('/users/:id', controller.getUser.bind(controller));
  routes.post('/save', controller.save.bind(controller));
  return routes;
};

module.exports = userRoutes;
