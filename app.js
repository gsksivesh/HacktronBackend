const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./_helpers/db');
const errorHandler = require('./_helpers/error-handler');
const jwt = require('./_helpers/jwt');

db.connectDatabase();

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwt);

app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.use(errorHandler);

module.exports = app;
