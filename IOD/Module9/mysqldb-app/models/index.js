"use strict";
const User = require("./user"); //require the model
//const Post = require("./Post"); //this is an example

async function init() {
  await User.sync(); // sync the model
//await Post.sync();
  // also sync any extra models here
}

init();

post.belongsTo(User);
User.hasMany(Post)

Comment.belongsTo(Post);
Post.hasMany(Comment);



module.exports = {
  User, // export the model
  // also export any extra models here
};
