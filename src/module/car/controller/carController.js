const { fromFormToEntity } = require('../mapper/carMapper');

class CarController {

  constructor(carServices) {
    this.carServices = carServices;
  }

  async getCar(req, res, next) {
    const { id } = req.params;

    try {
      const car = await this.carServices.getCar(Number(id));
      res.status(200).json(car);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const cars = await this.carServices.getAll();
      res.status(200).json(cars);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async save(req, res, next) {
    try {
      const car = fromFormToEntity(req.body);
      const carSaved = await this.carServices.save(car);
      res.status(200).json(carSaved);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const findCar = await this.carServices.getCar(Number(id));
      const boolean = await this.carServices.delete(findCar);
      res.status(200).json({ delete: boolean, msg: `Auto con id ${findCar.id} eliminado` });

    } catch (error) {
      res.status(500);
      next(error);
    }
  }
}

module.exports = CarController;
