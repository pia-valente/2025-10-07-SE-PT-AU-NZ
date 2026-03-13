const express = require("express");
const app = express();

//this wll read info from .env file
//should be before dbConnect
require("dotenv").config(); 

let dbConnect = require("./dbConnect");

const userRoutes = require("./Routes/userRoutes");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDBapplication." });
});

app.use("/api/users", userRoutes); //will attach the routes to web server instance
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 

