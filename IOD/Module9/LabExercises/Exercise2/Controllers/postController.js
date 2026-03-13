"use strict";
let { Post } = require("../Models");

// GET all posts
const getPosts = (req, res) => {
  Post.find({})
    .populate("bloggerId", "name username") 
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// CREATE post
const createPost = (req, res) => {
  const data = req.body;
  console.log(data);
  new Post(req.body)
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// UPDATE post
const updatePost = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// DELETE post
const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};