const { fromFormToEntity } = require('../mapper/userMapper');

class userController {

  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res, next) {
    const { id } = req.params;

    try {
      const user = await this.userService.getUser(Number(id));
      res.status(200).json(user);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await this.userService.getAll();
      res.status(200).json(users);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async save(req, res, next) {
    const user = req.body;

    try {
      const userEntity = fromFormToEntity(user);
      const userSaved = await this.userService.save(userEntity);
      res.status(200).json(userSaved);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

}

module.exports = userController;
