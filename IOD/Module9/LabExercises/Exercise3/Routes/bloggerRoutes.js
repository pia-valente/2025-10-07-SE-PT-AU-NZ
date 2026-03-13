const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.bloggerController.getBlogger(res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.bloggerController.createBlogger(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.bloggerController.updateBlogger(req, res);
});

router.delete("/delete/:id", (req, res) => {
  Controllers.bloggerController.deleteBlogger(req, res);
}); 

module.exports = router;
