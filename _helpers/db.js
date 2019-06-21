const {dbConfig} = require('../config');

const mongoose = require('mongoose');
const debug = require('debug')('backendserver:server');

function connectDatabase() {
    const ss = require('../config');
    mongoose.connect(dbConfig.dbConnection, {useCreateIndex: true, useNewUrlParser: true});
    mongoose.Promise = global.Promise;
    debug(`Connected with MongoURI ${dbConfig.dbConnection}`);
}

module.exports = {
    connectDatabase
};
