const express=require('express');
const path=require('path')

const routes=express.Router();

//  /admin/ad-product=>GET
routes.get('/add-product', (req, res, next) => {
    console.log('In middleware');
    res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
    // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
  });

// /admin/ad-product=>POST
routes.post('/add-product',(req,res,next)=>{ //Use Post method for parsed URLEncoded data 
    console.log(req.body); //Parsed URLEncode data
    res.redirect('/')
  })

module.exports=routes