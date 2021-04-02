const express = require('express'); 
const userRouter = new express.Router();
let {getAllUser , createUser , getUser ,
     updateUser , deleteUser , friendRequest ,
     acceptRequest , getAllFollowers ,
     getAllFollowingusers , getUserFollowerCount  } = require('../controller/userController');

userRouter.route("/").get(getAllUser).post(createUser);
userRouter.route("/:follower_id/friendRequest").post(friendRequest);
userRouter.route("/:user_id/acceptRequest").patch(acceptRequest);
userRouter.route("/:user_id/getFollowers").get(getAllFollowers);
userRouter.route("/:user_id/getFollowing").get(getAllFollowingusers);
userRouter.route("/:user_id/getUserFollowerCount").get(getUserFollowerCount);
userRouter.route("/:uid").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;