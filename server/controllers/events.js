const Event = require("../models/event");


const createEvent = async (req, res) => {
    try{
        if (!req.file) {
          return res.status(400).json({ message: "File not provided." });
        }
        const newEvent = await Event.create({...req.body,image:req.file.secure_url});
        res.status(201).json(newEvent);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const getAllEvents = async (req, res) => {
    try{
        const allEvents = await Event.find()
          .populate("organizer")
          .populate("attendees");
        res.status(200).json(allEvents);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const getEventById = async (req, res) => {
    const {id}=req.params;
    try{
        const targetEvent = await Event.find({_id:id}).populate("organizer").populate("attendees");
        if(targetEvent.length===0){
            res.status(404).json({message:"Event not found"});
        }
        else{
            res.status(200).json(targetEvent[0]);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateEventById = async (req, res) => {
    const {id}=req.params;
    try{
        const updateEvent = await Event.findByIdAndUpdate(id,req.body,{new:true});
        if(!updateEvent){
            res.status(404).json({message:"Event not found"});
        }
        else{
            res.status(200).json(updateEvent);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const deleteEventById = async (req, res) => {
    const {id}=req.params;
    try{
        const deleteEvent = await Event.findByIdAndDelete(id);
        if(!deleteEvent){
            res.status(404).json({message:"Event not found"});
        }
        else{
            res.status(200).json(deleteEvent);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const addUserToEvent = async (req, res) => {
    const {id}=req.params;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id,{$push:{attendees:req.body.userId}},{new:true});
        if(!updatedEvent){
            res.status(404).json({message:"Event not found"});
        }
        else{
            res.status(200).json(updatedEvent);
        }
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
  addUserToEvent,
};