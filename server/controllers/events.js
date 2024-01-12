const Event = require("../models/event");

const createEvent = async (req, res) => {
    try{
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const getAllEvents = async (req, res) => {
    try{
        const allEvents = await Event.find();
        res.status(200).json(allEvents);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const getEventById = async (req, res) => {
    const {id}=req.params;
    try{
        const targetEvent = await Event.find({_id:id}).populate("organizer");
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

module.exports = {createEvent,getAllEvents,getEventById,updateEventById,deleteEventById};