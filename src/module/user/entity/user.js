class User {
  constructor(
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
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.birthdate = birthdate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = User;
