const express = require('express');
const path = require('path');

const routes = express.Router();
const products = [];

//  /admin/ad-product=>GET
routes.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
  // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
});

// /admin/ad-product=>POST
routes.post('/add-product', (req, res, next) => { //Use Post method for parsed URLEncoded data 
  products.push({ title: req.body.title })
  res.redirect('/')
})

module.exports = { routes, products };