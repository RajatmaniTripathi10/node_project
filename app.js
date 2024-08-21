const express = require('express');
const path = require('path')
const adminRoutes=require('./routers/admin')
const shopRoutes=require('./routers/shop')
const bodyParse=require('body-parser');
const app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes) //Filter
app.use(shopRoutes)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'Views','404.html')) //Route to worng page
})


app.listen(3000, () => {
  console.log('Server started on port 3000');
});