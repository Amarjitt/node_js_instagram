const express = require('express'); 
const userRouter = new express.Router();
let {getAllUser , createUser , getUser , updateUser , deleteUser , friendRequest} = require('../controller/userController');
userRouter.route("/").get(getAllUser).post(createUser);
userRouter.route("/friendRequest/:follower_id").post(friendRequest);
userRouter.route("/:uid").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = userRouter;