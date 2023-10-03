const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {

  static setup(sequelizeInstance) {
    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        firstName: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        nationality: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        birthdate: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'User',
        tableName: 'user',
        underscored: true,
        paranoid: true,
      },
    );

    return UserModel;
  }
}

module.exports = UserModel;
