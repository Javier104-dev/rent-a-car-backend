const { fromFormToEntity } = require('../mapper/userMapper');

class userController {

  constructor(userServices) {
    this.userServices = userServices;
  }

  async getUser(req, res) {
    const { id } = req.params;

    try {
      const user = await this.userServices.getUser(Number(id));
      res.status(200).json(user);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await this.userServices.getAll();
      res.status(200).json(users);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async save(req, res) {
    try {
      const user = fromFormToEntity(req.body);
      const userSaved = await this.userServices.save(user);
      res.status(200).json(userSaved);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = userController;
