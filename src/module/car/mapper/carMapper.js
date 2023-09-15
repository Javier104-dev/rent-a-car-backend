const Car = require('../entity/car');

const fromModelToEntity = ({
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
}) => new Car(
  Number(id),
  brand,
  model,
  Number(year),
  Number(kms),
  color,
  Number(passengers),
  Number(price),
  img,
  createdAt,
  updatedAt,
);

const fromFormToEntity = ({
  id,
  brand,
  model,
  year,
  kms,
  color,
  passengers,
  price,
  img,
  'created-at': createdAt,
  'updated-at': updatedAt,
}) => new Car(
  Number(id),
  brand,
  model,
  Number(year),
  Number(kms),
  color,
  Number(passengers),
  Number(price),
  img,
  createdAt,
  updatedAt,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
