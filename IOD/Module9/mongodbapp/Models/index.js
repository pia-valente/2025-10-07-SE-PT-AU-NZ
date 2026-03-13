"use strict";

const user = require("./user");

//import the exported model
// importing from the user.js this schema 
module.exports = {
  User: require("./user"),
};
