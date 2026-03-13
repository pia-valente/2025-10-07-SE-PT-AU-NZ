const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
    //these are the fields of the document, and their types and constraints
  name: { type: String, trim: true, required: true },
  username: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
});

//this is how you create the model
module.exports = mongoose.model("blogger", bloggerSchema); //singular name is given, plural name will become the collection name in mongoDB.
