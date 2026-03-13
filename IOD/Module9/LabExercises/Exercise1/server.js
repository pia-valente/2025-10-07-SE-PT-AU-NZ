
const express = require("express");
const app = express();
const calculatorRouter = require("./Routes/calculatorRoutes");

app.use("/calculator", calculatorRouter);

app.listen(3005, () => {
    console.log("Calculator server running at http://127.0.0.1:3005");
});