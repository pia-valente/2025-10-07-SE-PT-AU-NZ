const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  //these are the fields of the document, and their types and constraints
  postId: { type: Schema.Types.ObjectId, ref: "post", required: true },
  title: { type: String, trim: true, required: true },
  
  
  
  
});

//this is how you create the model
module.exports = mongoose.model("like", likeSchema); //singular name is given, plural name will become the collection name in mongoDB.
