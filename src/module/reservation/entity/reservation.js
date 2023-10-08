class Reservation {

  constructor(
    id,
    startDate,
    finishDate,
    pricePerDay,
    totalPrice,
    carId,
    userId,
    createdAt,
    updatedAt,
    Car,
    User,
  ) {
    this.id = id;
    this.startDate = new Date(startDate);
    this.finishDate = new Date(finishDate);
    this.pricePerDay = pricePerDay;
    this.totalPrice = totalPrice;
    this.carId = carId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.Car = Car;
    this.User = User;
  }

  calculateReservation() {
    const MILISECONDS_DAY = 86400000;
    const startDate = new Date(this.startDate).getTime();
    const finishDate = new Date(this.finishDate).getTime();
    return Math.ceil((finishDate - startDate) / MILISECONDS_DAY);
  }

  reserve() {
    this.pricePerDay = this.pricePerDay || this.Car.price;
    this.totalPrice = this.pricePerDay * this.calculateReservation();
    return this;
  }
}

module.exports = Reservation;
