const http=require('http');
const routes=require('./routes');
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use('/about-product',(req,res,next)=>{
    // res.write('<html><body><h1>HELOO</h1></body></html>')
    // res.send();
    res.send(`<html><body><form action="/product" method="POST"><label for='product'>Product</label><input type='text' id='product' name='product'><label for='email'>Size</label><input type='text' id='email' name='email'><button>submit</button type submit></form></body></html>`)
//
    //next();
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    //console.log(req.body);
    res.send("<h1>HELLO</h1>");
})
const server=http.createServer(app);
server.listen(5501);