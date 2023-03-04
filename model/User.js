const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    googleId:{
        type:String,
        required:true
    }
}
);
mongoose.models={}
module.exports=mongoose.model("User",UserSchema);