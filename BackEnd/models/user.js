const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:{type:String, required:true,trim:true},
    lastname:{type:String, required:true,trim:true},
    phone:{type:Number, required:true},
    email:{type:String,required:true,trim:true}
}

)

const User = mongoose.model('User',userSchema);

module.exports=User;