const http=require('http');
const express=require('express');
const app=express();
const username=require('./user/username');
const chat=require('./user/chat')
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use('/cht',chat);
app.use('/cht',username);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!</h1>')
})
const server=http.createServer(app);
server.listen(5500);