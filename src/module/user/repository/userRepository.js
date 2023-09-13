const { fromModelToEntity } = require('../mapper/userMapper');

class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getAll() {
    const users = await this.userModel.findAll();
    const usersEntity = users.map((element) => fromModelToEntity(element));
    return usersEntity;
  }
}

module.exports = UserRepository;
