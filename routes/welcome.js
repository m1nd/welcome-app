var express = require("express");
var router = express.Router();

var welcomeController =  require("../controllers/welcomeController");

router.get("/", welcomeController.welcome);

module.exports = router;
