// controllers/calculatorControllers.js
const Calculator = require("../Models/calculator");
const calculator = new Calculator();

exports.addNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.add(num1, num2);
    res.json({ res: result });
};

exports.subtractNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.subtract(num1, num2);
    res.json({ res: result });
};

exports.multiplyNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.multiply(num1, num2);
    res.json({ res: result });
};

exports.divideNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.divide(num1, num2);
    res.json({ res: result });
};