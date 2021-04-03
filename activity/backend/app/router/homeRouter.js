const express = require('express'); 
const homeRouter = new express.Router();

let {getHomePage } = require('../controller/homeController');

homeRouter.route("/api/v1/").get(getHomePage);
module.exports = homeRouter;