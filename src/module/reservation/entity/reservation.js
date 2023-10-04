class Reservation {

  constructor(
    id,
    startDate,
    finishDate,
    pricePerDay,
    totalPrice,
    carId,
    userId,
    Car,
    User,
  ) {
    this.id = id;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.pricePerDay = pricePerDay;
    this.totalPrice = totalPrice;
    this.carId = carId;
    this.userId = userId;
    this.Car = Car;
    this.User = User;
  }
}

module.exports = Reservation;
