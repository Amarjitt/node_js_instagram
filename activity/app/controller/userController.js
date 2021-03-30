const userModel = require('../model/userModel');
const { uuid } = require('uuidv4');
const fs = require('fs')
const path = require('path')
var userDB = require('../db/user.json');
var arr = __dirname.split('/');
arr.pop();
var path1  = arr.join('/');

const getAllUser = async(req,res) =>{
    try{
        let users = await userModel.getAllUser();
        console.log(users)
        res.status(201).json({
            status: "success",
            user: users
        })
    }
    catch(err){
        res.status(500).json({
            status: "success",
            "message": err.message
        }) 
    }
}

const getUser = async (req,res) => {
    try{
        let userId = req.params.uid;
        let user = await userModel.getById(userId)
        res.status(201).json({
            status: "success",
            user: user
        })
    }
    catch(err){
        res.status(500).json({
            status: "success",
            "message": err.message
        }) 
    }
}

const createUser =  async(req,res) =>{
    try{
        let user = req.body;
        let nDBUser = await userModel.create(user);
        res.status(201).json({
            status: "success",
            user: nDBUser
        })
    }
    catch(err){
        res.status(500).json({
            status: "success",
            "message": err.message
        })
    }
}    

const updateUser =async(req,res) => {
    try{
        let userObj = req.body;
        let userId = req.params.uid;
        let user = await userModel.updateById(userObj,userId)
        res.status(201).json({
            status: "success",
            user: user
        })
    }
    catch(err){
        res.status(500).json({
            status: "success",
            "message": err.message
        })
    }
}

const deleteUser = async(req,res) =>{
    try{
        let userId = req.params.uid;
        let user = await userModel.deleteById(userId)
        res.status(201).json({
            status: "success",
            user: user
        })
    }
    catch(err){
        res.status(500).json({
            status: "success",
            "message": err.message
        })
    }
}

module.exports.getAllUser = getAllUser;
module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;