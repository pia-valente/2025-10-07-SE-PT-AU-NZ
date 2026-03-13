//methods for the blogger

"use strict";
let { Comment } = require("../Models");

// GET comments
const getComments = (req, res) => {
  Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//CREATE comment
const createComment = (req, res) => {
  const data = req.body;
  console.log(data);
  new Comment(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// PUT/UPDATE comment
const updateComment = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// DELETE comment
const deleteComment = (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};

