const Product=require('../models/productModel')

exports.getAddProduct=(req, res, next) => {
    res.render('admin/add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
    // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
}
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
  };

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