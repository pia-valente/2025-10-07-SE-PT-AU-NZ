"use strict";
const  Blogger = require("./blogger"); //require the model
const  Post = require("./post"); //require the model
const  Comment = require("./comment"); //require the model
const  Like = require("./like"); //require the model


async function init() {
  await Blogger.sync(); // sync the model
  await Post.sync();
  await Comment.sync();
  await Like.sync();
  // also sync any extra models here
}

init();

/*
post.belongsTo(User);
User.hasMany(Post)

Comment.belongsTo(Post);
Post.hasMany(Comment);
*/


module.exports = {
  Blogger,
  Post,
  Comment,
  Like,

  // also export any extra models here
};
