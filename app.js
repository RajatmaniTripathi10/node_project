const express = require('express');
const adminRoutes=require('./routers/admin')
const shopRoutes=require('./routers/shope')
const bodyParse=require('body-parser');
const app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(adminRoutes)
app.use(shopRoutes)


app.listen(3000, () => {
  console.log('Server started on port 3000');
});