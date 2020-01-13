'use strict'

const express = require('express')
const expressJwt = require('express-jwt');
const routes = express();

const controllers = require('../controllers')
//const config = require('../config/auth')

const checkAuth = expressJwt({
  secret: '34500'
});

routes.post('/', checkAuth, controllers.cart.addItemToCart);
routes.put('/', checkAuth, controllers.cart.updateCartItem);
routes.get('/:username', checkAuth, controllers.cart.getCartItems);
routes.delete('/:cartItemId', checkAuth, controllers.cart.deleteCartItem);

module.exports = routes
