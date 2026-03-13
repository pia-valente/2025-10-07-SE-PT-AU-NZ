const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/delete/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
}); 

module.exports = router;
