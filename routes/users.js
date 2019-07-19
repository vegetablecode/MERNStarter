const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

router
  .route("/register")
  // @route   POST api/users/register
  // @desc    Register new user
  // @access  Public
  .post(UserController.registerUser);

router
  .route("/login")
  // @route   POST api/users/login
  // @desc    Authenticate user
  // @access  Public
  .post(UserController.loginUser);

module.exports = router;
