/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const cors = require('cors');
const { HOST, PORT } = require('./config/config');
const configureDI = require('./config/configDi');
const { initUserModule } = require('./module/user/module');
const { initCarModule } = require('./module/car/module');
const { initReservationModule } = require('./module/reservation/module');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
}));

const container = configureDI();
const Sequelize = container.get('Sequelize');

initCarModule(app, container);
initUserModule(app, container);
initReservationModule(app, container);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Página no encontrada' });
});

app.use((error, req, res, next) => {
  res.json({ message: error.message });
});

(async () => {
  try {
    await Sequelize.authenticate();
    app.listen(PORT, HOST, () => { console.log(`http://${HOST}:${PORT}`); });

  } catch (error) {
    console.log(error.message);
  }
})();
