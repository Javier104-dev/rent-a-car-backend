const CarModel = require('../../car/model/carModel');
const UserModel = require('../../user/model/userModel');
const { fromModelToEntity } = require('../mapper/reservationMapper');
const { fromModelToEntity: fromModelCarToEntity } = require('../../car/mapper/carMapper');
const { fromModelToEntity: fromModelUserToEntity } = require('../../user/mapper/userMapper');

class ReservationRepository {

  constructor(reservationModel) {
    this.reservationModel = reservationModel;
  }

  async getAll() {
    const reservations = await this.reservationModel.findAll({
      include: [
        { model: CarModel, paranoid: false },
        { model: UserModel, paranoid: false },
      ],
    });

    const reservationsEntity = reservations.map((reservation) => fromModelToEntity(
      reservation,
      fromModelCarToEntity,
      fromModelUserToEntity,
    ));

    return reservationsEntity;
  }

  async makeReservation(reservation) {
    const reservationModel = this.reservationModel.build(reservation, { idNewRecord: !reservation.id });
    await reservationModel.save();
    return fromModelToEntity(reservationModel);
  }
}

module.exports = ReservationRepository;
