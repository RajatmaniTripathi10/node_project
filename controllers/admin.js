const Product=require('../models/productModel')

exports.getAddProduct=(req, res, next) => {
    res.render('admin/add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
    // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
}
exports.postAddProduct = (req, res, next) => {
    const { title, price, description, imageURL } = req.body;
    const product = new Product({ title, price, description, imageURL });
    product.save();
    res.redirect('/');
}

exports.getProduct=(req,res,next)=>{
    Product.fetchAll()
    .then(([products])=>{
        res.render('admin/products',{prods:products,pageTitle:'Admin Products',path:'admin/products'})
    })
    .catch(err=>{
        console.error(err);
        res.status(500).render('error'); // or redirect to an error page
    })
}