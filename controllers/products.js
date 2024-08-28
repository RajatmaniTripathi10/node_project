const products=[]

exports.getAddProduct=(req, res, next) => {
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
    // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
}
exports.postAddProduct=(req, res, next) => { //Use Post method for parsed URLEncoded data 
    products.push({ title: req.body.title })
    res.redirect('/')
}

exports.getProduct=(req, res, next) => {
    //const products = adminData.products;  // Access the products from adminData
    res.render('shop', { 
      prods: products, 
      pageTitle: 'Shop',
      path:'/',
      product:products.length>0});  // Pass docTitle as well for the title in the template
  }