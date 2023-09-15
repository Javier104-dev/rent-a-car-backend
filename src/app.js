const express = require('express');
const { HOST, PORT, configureDI } = require('./config/configDi');
const { userRoutes } = require('./module/user/module');
const { carRoutes } = require('./module/car/module');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const container = configureDI();
server.use(userRoutes(container));
server.use(carRoutes(container));

// eslint-disable-next-line no-console
server.listen(PORT, HOST, () => { console.log(`http://${HOST}:${PORT}`); });
