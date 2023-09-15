const { fromFormToEntity } = require('../mapper/carMapper');

class CarController {

  constructor(carServices) {
    this.carServices = carServices;
  }

  async getCar(req, res) {
    const { id } = req.params;

    try {
      const car = await this.carServices.getCar(Number(id));
      res.status(200).json(car);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const cars = await this.carServices.getAll();
      res.status(200).json(cars);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async save(req, res) {
    try {
      const car = fromFormToEntity(req.body);
      const carSaved = await this.carServices.save(car);
      res.status(200).json(carSaved);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const findCar = await this.carServices.getCar(Number(id));
      const boolean = await this.carServices.delete(findCar);
      res.status(200).json({ delete: boolean, msg: `Auto con id ${findCar.id} eliminado` });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CarController;
