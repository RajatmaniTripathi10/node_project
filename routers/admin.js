const express = require('express');
const path = require('path');
const adminController=require('../controllers/admin')

const routes = express.Router();

//  /admin/ad-product=>GET
routes.get('/add-product',adminController.getAddProduct); //Passes the reference of the getProduct method

//  /admin/products
routes.get('/products',adminController.getProduct); //Passes the reference of the getProducts method

// /admin/ad-product=>POST
routes.post('/add-product', adminController.postAddProduct)

module.exports = { routes};