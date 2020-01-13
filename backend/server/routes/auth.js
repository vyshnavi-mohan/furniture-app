'use strict'

const express = require('express')
const expressJwt = require('express-jwt');
const routes = express();

const controllers = require('../controllers')

routes.post('/login', controllers.auth.logIn);
routes.post('/signup', controllers.auth.signupdoc);
module.exports = routes
