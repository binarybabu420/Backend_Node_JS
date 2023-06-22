const express=require('express');
const router=express.Router();
const fs=require('fs');
router.get('/username',(req,res,next)=>{
    
    res.send('<form action="/cht/uss" method="POST"><label for="username">Username</label><input name="username" id="username"><button type="submit">submit</button></form>');

});
//
router.post('/uss',(req,res,next)=>
{
    console.log(req.body.username)
//localStorage.setItem('username',req.body.username);
fs.appendFile('./message',req.body.username,(err)=>
{
    if(err)
    throw err;
});
console.log(req.body);
res.send('<form action="/cht/user" method="POST"><label for="chat">chat</label><input name="chat" id="chat"><button type="submit">send</button></form>');
})

router.post('/user',(req,res,next)=>{

fs.appendFile('./message',req.body.chat,(err)=>
{
    if(err)
    throw err;
});
console.log(req.body);
res.send('<form action="/cht/user" method="POST"><label for="chat">chat</label><input name="chat" id="chat"><button type="submit">send</button></form>');

//res.redirect('/');

});
module.exports=router;
