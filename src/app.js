/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const { HOST, PORT } = require('./config/config');
const configureDI = require('./config/configDi');
const { userRoutes } = require('./module/user/module');
const { carRoutes } = require('./module/car/module');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const container = configureDI();
const Sequelize = container.get('Sequelize');

server.use(userRoutes(container));
server.use(carRoutes(container));

server.use('*', (req, res) => {
  res.status(404).json({ msg: 'Pagina no encontrada' });
});

server.use((error, req, res, next) => {
  res.json({ msg: error.message });
});

(async () => {
  try {
    await Sequelize.authenticate();
    server.listen(PORT, HOST, () => { console.log(`http://${HOST}:${PORT}`); });

  } catch (error) {
    console.log(error.message);
  }
})();
