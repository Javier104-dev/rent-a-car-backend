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
  Car,
  User,
}) => new Reservation(
  Number(id),
  startDate,
  finishDate,
  Number(pricePerDay),
  totalPrice,
  Number(carId),
  Number(userId),
  Car,
  User,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
