const express = require("express");
const app = express();
require("dotenv").config(); 

let dbConnect = require("./dbConnect");

//ROUTES
const bloggerRoutes = require("./Routes/bloggerRoutes");
const postRoutes = require("./Routes/postRoutes");
const commentRoutes = require("./Routes/commentRoutes");
const likeRoutes = require("./Routes/likeRoutes");

    
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Module 9 Labe Exercise 3" });
});


app.use("/api/bloggers", bloggerRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);




// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 

