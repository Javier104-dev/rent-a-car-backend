class userController {

  constructor(userServices) {
    this.userServices = userServices;
  }

  async getAll(req, res) {
    try {
      const users = await this.userServices.getAll();
      res.status(200).json(users);

    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = userController;
