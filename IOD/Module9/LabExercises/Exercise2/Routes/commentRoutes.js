let express = require("express");
let router = express.Router();
let {commentController} = require("../Controllers"); // index.js

// Adds a GET route to return all comments
router.get("/", (req, res) => {
  commentController.getComments(req, res);
});

// Adds a POST route to create a new comment
router.post("/create", (req, res) => {
  commentController.createComment(req, res);
});

router.put('/:id', (req, res) => {
  commentController.updateComment(req, res);
});

router.delete('/:id', (req, res) => {
  commentController.deleteComment(req, res);
});


module.exports = router;
