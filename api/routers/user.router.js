const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
const authController = require("../controllers/auth.controller")
router.post("/signup", authController.signUp);
router.post("/login", authController.login)

router.route("/").get(userController.getUsers);

module.exports = router;