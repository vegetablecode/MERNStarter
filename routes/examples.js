const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const ExampleController = require("../controllers/examples");

router
  .route("/")
  // @route   GET api/examples
  // @desc    Get example private response
  // @access  Private
  .get(auth, asyncMiddleware(ExampleController.getExampleResponse));

module.exports = router;
