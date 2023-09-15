const { fromModelToEntity } = require('../mapper/userMapper');

class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getUser(id) {
    const user = await this.userModel.findByPk(id);

    if (!user) throw new Error(`No se encontraron usuarios con el id ${id}`);

    return fromModelToEntity(user);
  }

  async getAll() {
    const users = await this.userModel.findAll();
    const usersEntity = users.map((user) => fromModelToEntity(user));
    return usersEntity;
  }

  async save(user) {
    const userModel = this.userModel.build(user, { isNewRecord: !user.id });
    await userModel.save();
    return fromModelToEntity(userModel);
  }
}

module.exports = UserRepository;
