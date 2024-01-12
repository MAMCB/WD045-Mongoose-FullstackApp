const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,min:18},
    phoneNumber:{type:String,required:true,unique:true},
    isActive:{type:Boolean,default:true}

},{timestamps:true});

module.exports = mongoose.model('User',userSchema);