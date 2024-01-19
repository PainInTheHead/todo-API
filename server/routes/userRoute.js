const express = require("express");
const userController = require("./../controllers/User");
const router = express.Router();

router.post("/registration", userController.userRegister);
router.post("/login", userController.userLog);

module.exports = router;

// userRegister
// userLog
