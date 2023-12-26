const Reservation = require('../entity/reservation');

const fromModelToEntity = (
  {
    id,
    startDate,
    finishDate,
    pricePerDay,
    totalPrice,
    carId,
    userId,
    Car,
    User,
    createdAt,
    updatedAt,
  },
  fromModelCarToEntity,
  fromModelUserToEntity,
) => new Reservation(
  id,
  startDate,
  finishDate,
  pricePerDay,
  totalPrice,
  carId,
  userId,
  createdAt,
  updatedAt,
  (Car && fromModelCarToEntity(Car)),
  (User && fromModelUserToEntity(User)),
);

const fromFormToEntity = ({
  id,
  'start-date': startDate,
  'finish-date': finishDate,
  'price-per-day': pricePerDay,
  'total-price': totalPrice,
  'car-id': carId,
  'user-id': userId,
  'created-at': createdAt,
  'updated-at': updatedAt,
  car,
  user,
}) => new Reservation(
  Number(id),
  startDate,
  finishDate,
  Number(pricePerDay),
  totalPrice,
  Number(carId),
  Number(userId),
  car,
  user,
  createdAt,
  updatedAt,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
