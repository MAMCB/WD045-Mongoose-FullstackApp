const express = require('express');

const userRouter = express.Router();
const {createUser,getAllUsers,getUserById,updateUserById,deleteUserById} = require('../controllers/users');


userRouter.post("/api/users",createUser);
userRouter.get("/api/users", getAllUsers);
userRouter.get("/api/users/:id", getUserById);
userRouter.put("/api/users/:id", updateUserById);
userRouter.delete("/api/users/:id", deleteUserById);

module.exports = userRouter;

