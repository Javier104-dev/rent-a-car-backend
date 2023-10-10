const express = require('express');

const routes = express.Router();

const userRoutes = (container) => {
  const controller = container.get('UserController');
  routes.get('/user', controller.getAll.bind(controller));
  routes.get('/user/:id', controller.getUser.bind(controller));
  routes.post('/user', controller.save.bind(controller));
  return routes;
};

module.exports = userRoutes;
