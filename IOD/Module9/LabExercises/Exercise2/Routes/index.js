"use strict";

// Import individual route files
const bloggerRoutes = require("./bloggerRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
const likeRoutes = require("./likeRoutes");


// Export them as an object
module.exports = {
  bloggerRoutes,
  postRoutes,
  commentRoutes,
  likeRoutes,
};