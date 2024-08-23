const express = require('express'); // Import the Express.js framework
const path = require('path'); // Import the path module for working with file paths

const adminData = require('./routers/admin'); // Import the admin router module (not used in this code)
const adminRoutes = require('./routers/admin').routes; // Import the admin routes as a middleware
const shopRoutes = require('./routers/shop'); // Import the shop routes

const bodyParse=require('body-parser'); // Import the body-parser middleware for parsing request bodies

const app = express(); // Create a new Express.js app instance

app.use(bodyParse.urlencoded({extended:false})); // Use the body-parser middleware to parse URL-encoded request bodies
app.use(express.static(path.join(__dirname,'public'))); // Serve static files from the 'public' folder

app.use('/admin',adminRoutes); // Mount the admin routes at the '/admin' path
app.use(shopRoutes); // Mount the shop routes at the root path ('/')

app.set('view engine', 'pug'); // Set the view engine to Pug (a templating engine)
//app.set('view engine', 'Views'); // This line is commented out, but it would set the view engine to 'Views' (not a valid view engine)

app.use((req,res,next)=>{ // Define a catch-all route for 404 errors
  res.status(404).render('404',{pageTitle:'404 Page Not Found'}) // Send a 404 response with the '404.html' file from the 'Views' folder
}); // This route will be called if no other route matches the request

app.listen(3000, () => { // Start the server listening on port 3000
  console.log('Server started on port 3000'); // Log a message to the console when the server starts
});