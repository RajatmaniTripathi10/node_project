const express = require('express');
const adminData = require('./admin'); // Import the products along with routes
const shopController=require('../controllers/shop')
const routes = express.Router();

routes.get('/', shopController.getIndex );
routes.get('/products,',shopController.getProduct)
routes.get('/cart',shopController.getCart)
routes.get('/checkout',shopController.getCheckout)
module.exports = routes;