const bodyParser = require('body-parser');
const express = require('express');
// create an express application
const app = express(); // server handles requests
const path = require('path');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js')
// now register a parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
// add a middleware
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

// requesrt, response, next is passed to function receives a function allows travel of request to the next middleware
app.listen(3000);