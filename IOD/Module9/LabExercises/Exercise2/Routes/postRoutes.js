let express = require("express");
let router = express.Router();
let {postController} = require("../Controllers"); // index.js

// Adds a GET route to return all posts
router.get("/", (req, res) => {
  postController.getPosts(req, res); 
});

// Adds a POST route to create a new post
router.post("/create", (req, res) => {
  postController.createPost(req, res);
});

router.put('/:id', (req, res) => {
  postController.updatePost(req, res);
});

router.delete('/:id', (req, res) => {
  postController.deletePost(req.body, res);
});


module.exports = router;
