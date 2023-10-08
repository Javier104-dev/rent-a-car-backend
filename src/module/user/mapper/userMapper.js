const User = require('../entity/user');

const fromModelToEntity = ({
  id,
  firstName,
  lastName,
  nationality,
  address,
  phoneNumber,
  email,
  birthdate,
  createdAt,
  updatedAt,
}) => new User(
  Number(id),
  firstName,
  lastName,
  nationality,
  address,
  phoneNumber,
  email,
  birthdate,
  createdAt,
  updatedAt,
);

const fromFormToEntity = ({
  id,
  'first-name': firstName,
  'last-name': lastName,
  nationality,
  address,
  'phone-number': phoneNumber,
  email,
  birthdate,
  'created-at': createdAt,
  'updated-at': updatedAt,
}) => new User(
  Number(id),
  firstName,
  lastName,
  nationality,
  address,
  phoneNumber,
  email,
  birthdate,
  createdAt,
  updatedAt,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
