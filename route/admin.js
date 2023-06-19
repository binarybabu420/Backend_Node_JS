const express=require('express');
const router=express.Router();
router.get('/about-product',(req,res,next)=>{
    // res.write('<html><body><h1>HELOO</h1></body></html>')
    // res.send();
    res.send(`<html><body><form action="/admin/about-product" method="POST"><label for='product'>Product</label><input type='text' id='product' name='product'><label for='email'>Size</label><input type='text' id='email' name='email'><button>submit</button type submit></form></body></html>`)
//
    //next();
});
router.post('/about-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin');
})


module.exports=router;