class ReservationService {

  constructor(reservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async getAll() {
    return this.reservationRepository.getAll();
  }

  async makeReservation(reservation) {
    return this.reservationRepository.makeReservation(reservation);
  }
}

module.exports = ReservationService;
