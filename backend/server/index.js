'use strict'

const logger = require('winston')

const app = require('./app')
//const config = require('./config/server')

const port = 5300;
const ip = 'localhost';

app.listen(port,  ip, () => {
  logger.info(`App listening on port ${port}!`)
})
