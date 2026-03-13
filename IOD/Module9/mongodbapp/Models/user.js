const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({

    //these are the fields of the document, and their types and constraints
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  emailId: { type: String, trim: true, required: true, unique: true },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//this is how you create the model
module.exports = mongoose.model("user", userSchema); //singular name is given, plural name will become the collection name in mongoDB.
