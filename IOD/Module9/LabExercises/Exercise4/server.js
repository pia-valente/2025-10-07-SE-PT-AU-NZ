const express = require("express");
const app = express();
const catRoutes = require("./Routes/catRoutes");

app.use(express.json());
app.use("/api/cats", catRoutes);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});