const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    //console.log(req.body);
    res.send("<h1>HELLO from Express</h1>");
})
module.exports=router;