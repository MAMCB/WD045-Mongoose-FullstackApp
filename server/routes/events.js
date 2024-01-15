const express = require("express");

const eventRouter = express.Router();
const {createEvent,getAllEvents,getEventById,updateEventById,deleteEventById} = require('../controllers/events');

eventRouter.post("/api/events", createEvent);
eventRouter.get("/api/events", getAllEvents);
eventRouter.get("/api/events/:id", getEventById);
eventRouter.put("/api/events/:id", updateEventById);
eventRouter.delete("/api/events/:id", deleteEventById);

module.exports = eventRouter;