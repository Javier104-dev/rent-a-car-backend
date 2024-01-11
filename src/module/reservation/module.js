const ReservationController = require('./controller/reservationController');
const ReservationService = require('./service/reservationService');
const ReservationRepository = require('./repository/reservationRepository');
const ReservationModel = require('./model/reservationModel');
const reservationRoutes = require('./routes/reservationRoutes');

const initReservationModule = (app, container) => {
  app.use(reservationRoutes(container));
};

module.exports = {
  ReservationController,
  ReservationService,
  ReservationRepository,
  ReservationModel,
  initReservationModule,
};
