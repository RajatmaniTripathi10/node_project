const express = require('express');
const adminData = require('./admin'); // Import the products along with routes

const routes = express.Router();

routes.get('/', (req, res, next) => {
  const products = adminData.products;  // Access the products from adminData
  res.render('shop', { prods: products, docTitle: 'Shop' });  // Pass docTitle as well for the title in the template
});

module.exports = routes;