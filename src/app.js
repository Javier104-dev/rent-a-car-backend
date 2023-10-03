/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const { HOST, PORT } = require('./config/config');
const configureDI = require('./config/configDi');
const { userRoutes } = require('./module/user/module');
const { carRoutes } = require('./module/car/module');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const container = configureDI();
const Sequelize = container.get('Sequelize');

app.use(userRoutes(container));
app.use(carRoutes(container));

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Pagina no encontrada' });
});

app.use((error, req, res, next) => {
  res.json({ msg: error.message });
});

(async () => {
  try {
    await Sequelize.authenticate();
    app.listen(PORT, HOST, () => { console.log(`http://${HOST}:${PORT}`); });

  } catch (error) {
    console.log(error.message);
  }
})();
