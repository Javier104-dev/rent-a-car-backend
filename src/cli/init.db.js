const { configureDI } = require('../config/config');

(async () => {
  const container = configureDI();
  const mainDb = container.get('Sequelize');
  container.get('UserModel');

  await mainDb.sync();
})();
