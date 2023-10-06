const express = require('express');

const routes = express.Router();

const reservationRoutes = (container) => {
  const controller = container.get('ReservationController');
  routes.get('/reservations', controller.getAll.bind(controller));
  routes.get('/reservations/:id', controller.getReservation.bind(controller));
  routes.post('/reservations', controller.makeReservation.bind(controller));

  return routes;
};

module.exports = reservationRoutes;
