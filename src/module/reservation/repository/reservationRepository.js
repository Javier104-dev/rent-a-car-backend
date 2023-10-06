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

  async getReservation(id) {
    const reservation = await this.reservationModel.findByPk(id, {
      include: [
        { model: CarModel, paranoid: false },
        { model: UserModel, paranoid: false },
      ],
    });

    if (!reservation) throw new Error(`No se encontraron reservas con el id: ${id}`);

    return fromModelToEntity(
      reservation,
      fromModelCarToEntity,
      fromModelUserToEntity,
    );
  }

  async makeReservation(reservationEntity) {
    const reservation = this.reservationModel.build(reservationEntity, { idNewRecord: !reservationEntity.id });
    await reservation.save();

    return fromModelToEntity(
      reservation,
      fromModelCarToEntity,
      fromModelUserToEntity,
    );
  }
}

module.exports = ReservationRepository;
