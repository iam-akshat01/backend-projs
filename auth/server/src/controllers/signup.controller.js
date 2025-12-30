const express= require('express');
const Userdatabase= require('../services/database.services');

const signupController= async (req, res)=>{
    // logic for a user signup
    const {email, username, password}= req.body;
    // exists or not
    const findUser=Userdatabase.findUser;
    try{
     const checkexistingUser= await findUser(email, username);
     if(checkexistingUser){
        return res.status(400).json({message:checkexistingUser.message});
     }
     else{
        //otp validation
        //after valid otp call create after password being hashed
     }
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

module.exports={signupController};