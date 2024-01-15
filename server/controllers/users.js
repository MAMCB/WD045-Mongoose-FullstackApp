const User = require('../models/user');

const createUser = async (req, res) => {
    console.log(req.body)
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const getUserById = async (req, res) => {
    const {id} = req.params;
    try{
        const targetUser = await User.find({_id:id});
        if(targetUser.length===0)
        {
            res.status(404).json({message:"User not found"});
        
        }
        else{
            res.status(200).json(targetUser[0]);
        }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateUserById = async (req, res) => {
    const {id} = req.params;
    try{
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedUser)
        {
            res.status(404).json({message:"User not found"});
        }
        else{
            res.status(200).json(updatedUser);
        }
    }catch{
        res.status(500).json({message:error.message});
    }
};

const deleteUserById = async (req, res) => {
    const {id} = req.params;
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser)
        {
            res.status(404).json({message:"User not found"});
        }
        else{
            res.status(200).json(deletedUser);
        }
    }catch{
        res.status(500).json({message:error.message});
    }
};
module.exports = {createUser,getAllUsers,getUserById,updateUserById,deleteUserById};