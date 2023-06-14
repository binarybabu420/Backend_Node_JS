const http=require('http');
const routes=require('./routes');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('In the middle ware');
    next();
});
app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send({key:'value'});
})
const server=http.createServer(app);
server.listen(5501);