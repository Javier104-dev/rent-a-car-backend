const { configureDI } = require('../config/configDi');

(async () => {
  const container = configureDI();
  const sequelize = container.get('Sequelize');
  container.get('UserModel');
  container.get('CarModel');

  await sequelize.sync();
})();
