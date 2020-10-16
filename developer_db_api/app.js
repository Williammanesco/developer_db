require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');

const developersRouter = require('./domains/developers/developers.router')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// api routes
app.use('/developers', developersRouter);

//tratamento de erros
app.use(errorHandler);

module.exports = app;
