const express = require("express");
const app = express();

//this wll read info from .env file
//should be before dbConnect
require("dotenv").config(); 

let dbConnect = require("./dbConnect");

const bloggerRoutes = require("./Routes/bloggerRoutes");
const postRoutes = require("./Routes/postRoutes");
const commentRoutes = require("./Routes/commentRoutes");
const likeRoutes = require("./Routes/likeRoutes");

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Exercise2" });
});

//ROUTES
app.use("/api/bloggers", bloggerRoutes); //will attach the routes to web server instance
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);  

// set port, listen for requests
const PORT = process.env.PORT || 8080;
//const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 

