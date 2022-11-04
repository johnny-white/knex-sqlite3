const express = require('express');

const server = express();

server.get('/', (_, res) => {
  res.send('<h1>Bello World!</h1>');
});

module.exports = server;
