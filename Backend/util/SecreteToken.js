require ("dotenv").config();
const jwt=require("jsonwebtoken");
const { model } = require("mongoose");
module.exports.createSecretToken=(id)=>{
    return jwt.sign({id},process.env.Token_KEY,{
        expiresIn:3*24*60*60,
    })
}