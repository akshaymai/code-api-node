const express=require('express')
const router=express.Router()
const {User}=require('./model')



router.post('/adduser',(req,res)=>{

   
    User.create({
        username:req.body.username,
        name:req.body.name
    }).then((result)=>{
        res.status(200).send({
            message: 'user is created',
            user:result
        });
          }).catch((rr)=>{
            res.status(500).send({
                merssage: 'user is not created',
                error:rr
            });
          })
   
})


module.exports=router