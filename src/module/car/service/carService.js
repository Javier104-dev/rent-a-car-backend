const Car = require('../entity/car');

class CarService {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  async getCar(id) {
    if (!Number(id)) throw new Error('El id no esta definido');
    return this.carRepository.getCar(id);
  }

  async getAll() {
    return this.carRepository.getAll();
  }

  async save(car) {
    if (!(car instanceof Car)) throw new Error('El auto debe ser una instancia de Car');
    return this.carRepository.save(car);
  }

  async delete(car) {
    if (!(car instanceof Car)) throw new Error('El auto debe ser una instancia de Car');
    return this.carRepository.delete(car);
  }
}

module.exports = CarService;
