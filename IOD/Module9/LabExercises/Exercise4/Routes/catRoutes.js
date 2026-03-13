const express = require("express");
const router = express.Router();
const catController = require("../Controllers/catController");

// Query parameters support: ?page=1&limit=10
router.get("/facts", catController.getAllFacts);
router.get("/facts/:id", catController.getFactByIndex);

module.exports = router;