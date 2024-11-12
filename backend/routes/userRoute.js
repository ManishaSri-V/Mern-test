const express = require("express");
const { authSchema } = require("../middlewares/validation");
const { validate } = require("../middlewares/validate");

const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", validate(authSchema), registerUser);
router.post("/login", validate(authSchema), loginUser);

module.exports = router;
