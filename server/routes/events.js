const express = require("express");
const fs = require("fs");
const upload = require("../config/multer");
const cloudinary = require("../config/cloudinary");
const eventRouter = express.Router();
const {createEvent,getAllEvents,getEventById,updateEventById,deleteEventById,addUserToEvent} = require('../controllers/events');

const cloudinaryUpload = async (req, res, next) => {
    
    try {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath);
        req.file = result;
        fs.unlinkSync(filePath);
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

eventRouter.post("/",upload.single("image"),cloudinaryUpload, createEvent);
eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventById);
eventRouter.put("/:id", updateEventById);
eventRouter.delete("/:id", deleteEventById);
eventRouter.patch("/:id/join",addUserToEvent);

module.exports = eventRouter;