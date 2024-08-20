const express=require('express');

const routes=express.Router();
routes.get('/add-product', (req, res, next) => {
    console.log('In middleware');
    res.send('<form action="/product" method="POST"><label for="message">Message:</label><input type="text" id="message" name="message" required><button type="submit">Send</button></form>');
    // next(); // Allow the request to continue to the next middleware function in the application’s request-response cycle.
  });
routes.post('/product',(req,res,next)=>{ //Use Post method for parsed URLEncoded data 
    console.log(req.body); //Parsed URLEncode data
    res.redirect('/')
  })

module.exports=routes