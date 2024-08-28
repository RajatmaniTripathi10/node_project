const express = require('express');
const path = require('path');
const productController=require('../controllers/products')

const routes = express.Router();

//  /admin/ad-product=>GET
routes.get('/add-product',productController.getAddProduct); //Passes the reference of the getProduct method

// /admin/ad-product=>POST
routes.post('/add-product', productController.postAddProduct)

module.exports = { routes};