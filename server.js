require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./_helpers/db');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

db.connectDatabase();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

const usersRouter = require('./routes/users');
// api routes
app.use('/users', usersRouter);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
