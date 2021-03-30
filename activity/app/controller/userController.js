const userModel = require('../model/userModel');



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
const friendRequest = async(req,res) =>{
    try{
        let user_id = req.body.uid
        let follower_id = req.params.follower_id;
        let user = await userModel.createRequest(user_id,follower_id)
        res.status(201).json({
            status: "request sent",
            user: user
        })
    }
    catch(err){
        res.status(500).json({
            status: "request not sent",
            "message": err.message
        })
    }
}
const acceptRequest = async(req,res) =>{
    try{
        let follower_id =  req.body.follower_id
        let user_id = req.params.user_id
        let user = await userModel.requestAccept(user_id,follower_id)
        res.status(201).json({
            status: "request accepted"
        })
    }
    catch(err){
        res.status(500).json({
            status: "request not accepted due to some issue",
            "message": err.message
        })
    }
}


module.exports.getAllUser = getAllUser;
module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.friendRequest = friendRequest;
module.exports.acceptRequest = acceptRequest;

