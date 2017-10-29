const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const winston = require('winston');

const app = express();

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: 'api.log'})
  ]
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.logger = logger;
  next();
});

app.use('/', routes);

module.exports = app;
