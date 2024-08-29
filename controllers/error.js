exports.get404Page=(req,res,next)=>{ // Define a catch-all route for 404 errors
    res.status(404).render('404',{pageTitle:'404 Page Not Found',req:req,path:req.path}) // Send a 404 response with the '404.html' file from the 'Views' folder
}