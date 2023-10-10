const express = require('express');

const routes = express.Router();

const reservationRoutes = (container) => {
  const controller = container.get('ReservationController');
  routes.get('/reservation', controller.getAll.bind(controller));
  routes.get('/reservation/:id', controller.getReservation.bind(controller));
  routes.post('/reservation', controller.makeReservation.bind(controller));

  return routes;
};

module.exports = reservationRoutes;
