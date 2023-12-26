const { fromFormToEntity } = require('../mapper/reservationMapper');

class ReservationController {

  constructor(reservationService, carService, userService) {
    this.reservationService = reservationService;
    this.carService = carService;
    this.userService = userService;
  }

  async getAll(req, res, next) {
    try {
      const reservations = await this.reservationService.getAll();
      res.status(200).json(reservations);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async getReservation(req, res, next) {
    const { id } = req.params;

    try {
      const reservation = await this.reservationService.getReservation(Number(id));
      res.status(200).json(reservation);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async makeReservation(req, res, next) {
    const reservation = req.body;

    try {
      const reservationEntity = fromFormToEntity(reservation);
      const { carId, userId } = reservationEntity;

      reservationEntity.car = await this.carService.getCar(carId);
      reservationEntity.user = await this.userService.getUser(userId);

      const reservationSaved = await this.reservationService.makeReservation(reservationEntity);
      res.status(200).json(reservationSaved);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }
}

module.exports = ReservationController;
