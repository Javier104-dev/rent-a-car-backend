const User = require('../entity/user');

class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUser(id) {
    if (!Number(id)) throw new Error('El id no esta definido');
    return this.userRepository.getUser(id);
  }

  async getAll() {
    return this.userRepository.getAll();
  }

  async save(user) {
    if (!(user instanceof User)) throw new Error('El usuario debe ser una instancia de User');
    return this.userRepository.save(user);
  }
}

module.exports = UserService;
