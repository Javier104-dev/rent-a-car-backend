const { fromFormToEntity } = require('../mapper/carMapper');

class CarController {

  constructor(carService) {
    this.carService = carService;
  }

  async getCar(req, res, next) {
    const { id } = req.params;

    try {
      const car = await this.carService.getCar(Number(id));
      res.status(200).json(car);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const cars = await this.carService.getAll();
      res.status(200).json(cars);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async save(req, res, next) {
    const car = req.body;

    try {
      const carEntity = fromFormToEntity(car);
      const carSaved = await this.carService.save(carEntity);
      res.status(200).json(carSaved);

    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const findCar = await this.carService.getCar(Number(id));
      const boolean = await this.carService.delete(findCar);
      res.status(200).json({ delete: boolean, msg: `Auto con id ${findCar.id} eliminado` });

    } catch (error) {
      res.status(500);
      next(error);
    }
  }
}

module.exports = CarController;
