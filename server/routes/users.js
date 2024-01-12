const express = require('express');

const userRouter = express.Router();
const {createUser,getAllUsers,getUserById,updateUserById,deleteUserById} = require('../controllers/users');


router.post("/api/users",createUser);
router.get("/api/users",getAllUsers);
router.get("/api/users/:id",getUserById);
router.put("/api/users/:id",updateUserById);
router.delete("/api/users/:id",deleteUserById);

module.exports = userRouter;

