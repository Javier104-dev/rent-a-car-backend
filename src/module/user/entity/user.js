class User {
  constructor(
    id,
    firstName,
    lastName,
    nationality,
    address,
    phoneNumer,
    email,
    birthdate,
    createdAt,
    updateAt,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.address = address;
    this.phoneNumer = phoneNumer;
    this.email = email;
    this.birthdate = birthdate;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }
}

module.exports = User;
