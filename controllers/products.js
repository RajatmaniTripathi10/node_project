const Product=require('../models/productModel')

exports.getAddProduct=(req, res, next) => {
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
    // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
}
exports.postAddProduct=(req, res, next) => { //Use Post method for parsed URLEncoded data 
    const product=new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProduct = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop', { 
                prods: products, 
                pageTitle: 'Shop',
                path: '/',
                hasProducts: products.length > 0 
            });  
        })
        .catch(err => {
            console.error(err);
            res.status(500).render('error', { pageTitle: 'Error' });
        });
}