const http=require('http');
//const routes=require('./routes');
const express=require('express');
const app=express();
const adminRoutes=require('./route/admin');
const shopRoutes=require('./route/shop');
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use('/admin',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})


const server=http.createServer(app);
server.listen(5501);