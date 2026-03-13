const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  //these are the fields of the document, and their types and constraints
  bloggerId: { type: Schema.Types.ObjectId, ref: "blogger", required: true },
  title: { type: String, trim: true, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, trim: true, required: true },
  imageURL: { type: String, trim: true },
});

//this is how you create the model
module.exports = mongoose.model("post", postSchema); //singular name is given, plural name will become the collection name in mongoDB.
