//methods for the blogger

"use strict";
let { Blogger } = require("../Models");

// GET bloggers
const getBloggers = (req, res) => {
  Blogger.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//CREATE blogger
const createBlogger = (req, res) => {
  const data = req.body;
  console.log(data);
  new Blogger(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// PUT/UPDATE blogger
const updateBlogger = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  Blogger.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// DELETE blogger
const deleteBlogger = (req, res) => {
  Blogger.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


module.exports = {
  getBloggers,
  createBlogger,
  updateBlogger,
  deleteBlogger,
};

