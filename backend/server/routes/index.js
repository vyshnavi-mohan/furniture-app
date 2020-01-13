'use strict'

const auth = require('./auth')
const cart = require('./cart')
const inventory = require('./inventory')
const review = require('./review')
const category = require('./category')

module.exports = Object.assign({}, auth, cart, inventory, review, category)
