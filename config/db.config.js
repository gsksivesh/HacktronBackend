/**
 * Local MongoDB Configuration
 */
const development = {
  name: 'Production MongoDB',
  host: '127.0.0.1',
  port: '27017',
  db: 'BackendServer',
  authEnabled: false,
  get dbConnection() {
    return `mongodb://${this.host}:${this.port}/${this.db}`
  },
  auth: {
    user: null,
    pass: null
  }
};

/**
 * Production MongoDB Configuration
 */
const production = {
  name: 'Production MongoDB',
  host: '127.0.0.1',
  port: '27017',
  db: 'BackendServer',
  authEnabled: true,
  get dbConnection() {
    return `mongodb://${this.host}:${this.port}/${this.db}`
  },
  auth: {
    user: 'local',
    pass: 'test'
  }
};

// Getting Configuration Based on Environment
if (process.env.NODE_ENV === 'Production') {
  module.exports = production
} else {
  module.exports = development
}
