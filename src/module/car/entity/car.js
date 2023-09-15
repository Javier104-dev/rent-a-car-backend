class Car {

  constructor(
    id,
    brand,
    model,
    year,
    kms,
    color,
    passengers,
    price,
    img,
    createdAt,
    updatedAt,
  ) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.kms = kms;
    this.color = color;
    this.passengers = passengers;
    this.price = price;
    this.img = img;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Car;
