var express = require("express");
var router = express.Router();

router.get("/sign-up", function(req, res, next) {
  res.render("user/sign_up");
});

router.post("/sign-up", function (req, res, next) {
  res.send("SIGN UP POST");
});

router.get("/sign-in", function(req, res, next) {
  res.render("user/sign_in");
});

router.post("/sign-in", function (req, res, next) {
  res.send("SIGN IN POST");
});

module.exports = router;
