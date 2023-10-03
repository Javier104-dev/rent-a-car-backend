/* eslint-disable no-console */

const configureDI = require('../config/configDi');

(async () => {
  try {
    const container = configureDI();
    const sequelize = container.get('Sequelize');

    container.get('UserModel');
    container.get('CarModel');
    container.get('ReservationModel');

    await sequelize.sync();
    console.log('Sync completed');

  } catch (error) {
    console.log(error.message);
  }
})();
