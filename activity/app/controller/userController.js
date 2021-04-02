const userModel = require('../model/userModel');
const userFollowingModel = require('../model/userFollowingModel');
const userFollowerModel = require('../model/userFollowerModel');



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
        let user_id = req.body.user_id;
        let follower_id = req.params.follower_id;

        let userAns = await userModel.getById(user_id);
        let is_public1 = userAns[0].is_public

        let result = await userFollowerModel.createRequest(user_id,follower_id) //
        let followingResult = { "userIsPublic" : false};
        if(is_public1 === 1){
            followingResult.res2 = await userFollowerModel.requestAccept(user_id,follower_id);
            followingResult.res1 = await  userFollowingModel.addInUserFollowingTable(follower_id,user_id);//
            followingResult["userIsPublic"] = true;
        }
        
        res.status(201).json({
            status: "request sent",
            result: {
                "createRequestResult" : result,
                "userFollowingResult" : followingResult
            }
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
       
        let result = await userFollowerModel.requestAccept(user_id,follower_id)
        let followingResult = await  userFollowingModel.addInUserFollowingTable(follower_id,user_id);
        res.status(201).json({
            status: "request accepted",
            result: {
                "requestAcceptResult" : result,
                "followingResult" :  followingResult
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: "request not accepted due to some issue",
            "message": err.message
        })
    }
}

const getAllFollowers = async(req,res) =>{
    try{
        let user_id =  req.params.user_id
        let followersArray = await userFollowerModel.getUsersFollowers(user_id)
        res.status(201).json({
            status: "followers are shown in the array below:",
            array: followersArray
        })
    }
    catch(err){
        res.status(500).json({
            status: "request not accepted due to some issue",
            "message": err.message
        })
    }
}

const getAllFollowingusers = async(req,res) =>{
    try{
        let user_id =  req.params.user_id
        let followingArray = await userFollowingModel.getUsersFollowing(user_id)
        res.status(201).json({
            status: "following are shown in the array below:",
            array: followingArray
        })
    }
    catch(err){
        res.status(500).json({
            status: "request not accepted due to some issue",
            "message": err.message
        })
    }
}

const getUserFollowerCount = async(req,res) =>{
    try{
        let user_id =  req.params.user_id
        let userfollowingCount = await userFollowerModel.getUsersFollowersCount(user_id)
        res.status(201).json({
            status: "succesfully completed",
            count:  userfollowingCount
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
module.exports.getAllFollowers = getAllFollowers;
module.exports.getAllFollowingusers = getAllFollowingusers;
module.exports.getUserFollowerCount = getUserFollowerCount;