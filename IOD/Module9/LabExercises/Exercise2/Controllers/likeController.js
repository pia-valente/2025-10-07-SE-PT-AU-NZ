//methods for the blogger

"use strict";
let { Like } = require("../Models");

// GET likes
const getLikes = (req, res) => {
  Like.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//CREATE like
const createLike = (req, res) => {
  const data = req.body;
  console.log(data);
  new Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// PUT/UPDATE comment
const updateLike = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// DELETE comment
const deleteLike = (req, res) => {
  Like.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike, 
};

