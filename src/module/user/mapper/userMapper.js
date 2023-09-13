const User = require('../entity/user');

const fromModelToEntity = ({
  id,
  firstName,
  lastName,
  nationality,
  address,
  phoneNumer,
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
  phoneNumer,
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
  'phone-number': phoneNumer,
  email,
  birthdate,
  'created-at': createdAt,
}) => new User(
  Number(id),
  firstName,
  lastName,
  nationality,
  address,
  phoneNumer,
  email,
  birthdate,
  createdAt,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
