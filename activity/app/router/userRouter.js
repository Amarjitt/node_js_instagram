const express = require('express'); 
const userRouter = new express.Router();
let {getAllUser , createUser , getUser , updateUser , deleteUser} = require('../controller/userController');
userRouter.route("/").get(getAllUser).post(createUser);
userRouter.route("/:uid").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = userRouter;