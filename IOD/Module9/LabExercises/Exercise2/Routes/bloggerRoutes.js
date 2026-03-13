let express = require("express");
let router = express.Router();
let {bloggerController} = require("../Controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
  bloggerController.getBloggers(req, res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  bloggerController.createBlogger(req, res);
});

router.put('/:id', (req, res) => {
  bloggerController.updateBlogger(req, res);
});

router.delete('/:id', (req, res) => {
  bloggerController.deleteBlogger(req.body, res);
});


module.exports = router;
