const Car = require('../../car/entity/car');
const User = require('../../user/entity/user');

class ReservationService {

  constructor(reservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async getAll() {
    return this.reservationRepository.getAll();
  }

  async getReservation(id) {
    if (!Number(id)) throw new Error('El id no esta definido');
    return this.reservationRepository.getReservation(id);
  }

  async makeReservation(reservationEntity) {
    if (!(reservationEntity.Car instanceof Car)) throw new Error('El Auto debe ser una instancia de Car');
    if (!(reservationEntity.User instanceof User)) throw new Error('El Usuario debe ser una instancia de User');

    reservationEntity.reserve();
    return this.reservationRepository.makeReservation(reservationEntity);
  }
}

module.exports = ReservationService;
