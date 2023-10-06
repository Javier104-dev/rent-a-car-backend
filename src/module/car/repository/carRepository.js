const { fromModelToEntity } = require('../mapper/carMapper');

class CarRepository {
  constructor(carModel) {
    this.carModel = carModel;
  }

  async getCar(id) {
    const car = await this.carModel.findByPk(id);

    if (!car) throw new Error(`No se encontraron autos con el id ${id}`);

    return fromModelToEntity(car);
  }

  async getAll() {
    const cars = await this.carModel.findAll();
    return cars.map(fromModelToEntity);
  }

  async save(car) {
    const carModel = this.carModel.build(car, { isNewRecord: !car.id });
    await carModel.save();
    return fromModelToEntity(carModel);
  }

  async delete(car) {
    const boolean = await this.carModel.destroy({ where: { id: car.id } });
    return boolean;
  }
}

module.exports = CarRepository;
