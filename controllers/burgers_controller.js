var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

//Create the router for the app, and export the router at the end of your file.


// Export routes for server.js to use.
module.exports = router;