const express = require('express');
const adminData = require('./admin'); // Import the products along with routes
const productController=require('../controllers/products')
const routes = express.Router();

routes.get('/', productController.getProduct );

module.exports = routes;