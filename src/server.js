const express = require('express')

class App {
  constructor () {
    this.express = express()
    this.isDevelopmentEnvironment = process.env.NODE_ENV !== 'production'
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express