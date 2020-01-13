'use strict'

const express = require('express')
const expressJwt = require('express-jwt');
const routes = express();

const controllers = require('../controllers')

routes.get('/', controllers.category.getAllCategories);

module.exports = routes