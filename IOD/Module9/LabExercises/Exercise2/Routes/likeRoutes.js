let express = require("express");
let router = express.Router();
let {likeController} = require("../Controllers"); // index.js

// Adds a GET route to return all likes
router.get("/", (req, res) => {
  likeController.getLikes(req, res);
});

// Adds a POST route to create a new like
router.post("/create", (req, res) => {
  likeController.createLike(req, res);
});

router.put('/:id', (req, res) => {
  likeController.updateLike(req, res);
});

router.delete('/:id', (req, res) => {
  likeController.deleteLike(req, res);
});


module.exports = router;
