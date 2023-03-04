const express = require("express");
const routes = express.Router();
const User = require('../model/User');


routes.post("/addcontact", async(req,res)=>{
    console.log(req.body)
    try{
        const newUser =new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            googleId:req.body.googleId 
        });

        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err){
        console.log("errorsss",err);
    }
})
routes.get("/contacts/:id", async(req,res)=>{
    const googleId = req.params.id;
    try{
       const allContact = await User.find({googleId:googleId})
    //    console.log("all ",allContact)
       res.status(200).json(allContact);
    }catch(err){
        console.log("errorsss", err);
    }
})

routes.get("/contact/:id", async(req,res)=>{
    const id = req.params.id;
    try{
       const allContact = await User.find({_id:id})
    //    console.log("contact ",allContact)
       res.status(200).json(allContact);
    }catch(err){  
        console.log("errorsss", err);
    }
}) 
routes.put("/update/detail/:id", async(req,res)=>{
    const _id = req.params.id;
    try{ 
        const subject = await User.findOneAndUpdate({_id:_id},{
            $set:{
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                phone:req.body.phone,
                googleId:req.body.googleId 
            }
        })
        res.status(200).json(subject);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id;
    try{
       const del =await User.deleteOne({_id:id});
       res.status(200).json(del);
    }catch(err){
        console.log("errorsss", err);
    }

})



module.exports=routes