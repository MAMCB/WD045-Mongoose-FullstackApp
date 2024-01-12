const express = require("express");

const eventRouter = express.Router();
const {createEvent,getAllEvents,getEventById,updateEventById,deleteEventById} = require('../controllers/events');

router.post("/api/events",createEvent);
router.get("/api/events",getAllEvents);
router.get("/api/events/:id",getEventById);
router.put("/api/events/:id",updateEventById);
router.delete("/api/events/:id",deleteEventById);

module.exports = eventRouter;