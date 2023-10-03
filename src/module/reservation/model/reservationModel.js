const { Model, DataTypes } = require('sequelize');

class ReservationModel extends Model {

  static setup(sequelizeInstance) {
    ReservationModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        startDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        finishDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        pricePerDay: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        totalPrice: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        carId: {
          type: DataTypes.INTEGER,
        },
        userId: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'Reservation',
        tableName: 'reservation',
        underscored: true,
        paranoid: true,
      },
    );

    return ReservationModel;
  }

  static setupAssociations(CarModel, UserModel) {
    CarModel.hasMany(ReservationModel, { foreingkey: 'carId', constraints: false });
    ReservationModel.belongsTo(CarModel, { foreignKey: 'carId', constraints: false });
    UserModel.hasMany(ReservationModel, { foreingkey: 'userId', constraints: false });
    ReservationModel.belongsTo(UserModel, { foreingkey: 'userId', constraints: false });

    return ReservationModel;
  }
}

module.exports = ReservationModel;
