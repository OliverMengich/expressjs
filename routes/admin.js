const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
router.post('/amin/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

router.get('/addproduct',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

module.exports = router;