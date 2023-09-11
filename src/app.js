const express = require('express');
const { HOST, PORT } = require('./config/config');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-console
server.listen(PORT, HOST, () => { console.log(`http://${HOST}:${PORT}/alquiler`); });
