const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    location:{type:String,required:true},
    image:{type:String},
    organizer:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    attendees:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
},{timestamps:true});
module.exports = mongoose.model('Event',eventSchema);