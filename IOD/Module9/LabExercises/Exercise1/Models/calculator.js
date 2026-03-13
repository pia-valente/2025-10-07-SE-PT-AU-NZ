// models/Calculator.js
class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }

    #log(message, value) {
        console.log(`[Calculator:${this.id}] ${message} => Result:${value}`);
    }

    add(num1, num2) {
        const value = num1 + num2;
        this.#log("Add", value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log("Subtract", value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log("Multiply", value);
        return value;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            this.#log("Divide", "Error: Division by zero");
            return "Error: Division by zero";
        }
        const value = num1 / num2;
        this.#log("Divide", value);
        return value;
    }
}

module.exports = Calculator;