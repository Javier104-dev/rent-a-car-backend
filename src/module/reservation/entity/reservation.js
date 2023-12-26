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
    car,
    user,
  ) {
    this.id = id;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.pricePerDay = pricePerDay;
    this.totalPrice = totalPrice;
    this.carId = carId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.car = car;
    this.user = user;
  }

  calculateReservation() {
    const MILISECONDS_DAY = 86400000;
    const startDate = new Date(this.startDate).getTime();
    const finishDate = new Date(this.finishDate).getTime();
    return Math.ceil((finishDate - startDate) / MILISECONDS_DAY);
  }

  reserve() {
    this.pricePerDay = this.pricePerDay || this.car.price;
    this.totalPrice = this.pricePerDay * this.calculateReservation();
    return this;
  }
}

module.exports = Reservation;
