const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.postController.getPost(res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

router.delete("/delete/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
