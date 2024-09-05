const Product=require('../models/productModel')

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop/product-list', { 
                prods: products, 
                pageTitle: 'All Products',
                path: '/products',
                //hasProducts: products.length > 0 
            });  
        })
        .catch(err => {
            console.error(err);
            res.status(500).render('error', { pageTitle: 'Error' });
        });
}

exports.getIndex=(req,res,next)=>{
    Product.fetchAll()
    .then(products => {
        res.render('shop/index', {
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
exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle: 'Your Cart'
        });
}

exports.getCheckout=(res,req,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle: 'Checkout'
        });
}