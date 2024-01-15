const express = require('express');

const userRouter = express.Router();
const {createUser,getAllUsers,getUserById,updateUserById,deleteUserById} = require('../controllers/users');


userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUserById);
userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;

