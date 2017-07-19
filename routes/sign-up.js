var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("user/sign_up");
});

module.exports = router;
