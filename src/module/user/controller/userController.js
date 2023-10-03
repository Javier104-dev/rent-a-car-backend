const { fromFormToEntity } = require('../mapper/userMapper');

class userController {

  constructor(userServices) {
    this.userServices = userServices;
  }

  async getUser(req, res, next) {
    const { id } = req.params;

    try {
      const user = await this.userServices.getUser(Number(id));
      res.status(200).json(user);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await this.userServices.getAll();
      res.status(200).json(users);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async save(req, res, next) {
    try {
      const user = fromFormToEntity(req.body);
      const userSaved = await this.userServices.save(user);
      res.status(200).json(userSaved);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

}

module.exports = userController;
