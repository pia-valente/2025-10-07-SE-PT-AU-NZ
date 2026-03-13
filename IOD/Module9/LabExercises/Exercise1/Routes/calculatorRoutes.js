// routes/calculatorRouter.js
const express = require("express");
const router = express.Router();
const controller = require("../Controllers/calculatorController");

router.get("/:operation", (req, res) => {
    const { operation } = req.params;

    switch (operation) {
        case "Add":
            return controller.addNumbers(req, res);
        case "Subtract":
            return controller.subtractNumbers(req, res);
        case "Multiply":
            return controller.multiplyNumbers(req, res);
        case "Divide":
            return controller.divideNumbers(req, res);
        default:
            return res.status(400).json({ res: "Invalid operation" });
    }
});

module.exports = router;