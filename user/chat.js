const express=require('express');
const fs=require('fs');
const router=express.Router();
router.get((req,res,next)=>{
    //let value='Does not Exist';
    fs.readFile('./message',(err,input)=>{
        if(err)
        {
            throw err;
           }
        else
        {
        if(input.toString()==='')
        res.send('<p>Does not exist</p>')
        else
        res.send(`<h1>${input.toString}</h1>`)
    console.log(input.toString)
        }

    })
    res.send();
})
module.exports=router;