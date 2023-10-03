const { Model, DataTypes } = require('sequelize');

class CarModel extends Model {

  static setup(sequelizeInstance) {
    CarModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        brand: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        model: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        kms: {
          type: DataTypes.STRING(150),
        },
        color: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        passengers: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
        },
        img: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'Car',
        tableName: 'car',
        underscored: true,
        paranoid: true,
      },
    );

    return CarModel;
  }
}

module.exports = CarModel;
