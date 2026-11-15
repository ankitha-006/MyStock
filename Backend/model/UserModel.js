const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");
const {UserSchema}=require("../schema/UserSchema");
const UserModel= mongoose.model("user",UserSchema);
module.exports={UserModel};