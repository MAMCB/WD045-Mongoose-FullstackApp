const express = require("express");

const eventRouter = express.Router();
const {createEvent,getAllEvents,getEventById,updateEventById,deleteEventById} = require('../controllers/events');

eventRouter.post("/", createEvent);
eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventById);
eventRouter.put("/:id", updateEventById);
eventRouter.delete("/:id", deleteEventById);

module.exports = eventRouter;