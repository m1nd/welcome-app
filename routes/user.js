var express = require("express");
var router = express.Router();
var passport = require('passport');

var authController = require("../controllers/authController");


router.get("/sign-up", authController.signUp);
router.post("/sign-up", passport.authenticate('local-signup', 
                                                { successRedirect: '/welcome', 
                                                  failureRedirect: '/user/sign-up' }));

router.get("/sign-in", authController.signIn);
router.post("/sign-in", passport.authenticate('local-signin', 
                                                { successRedirect: '/welcome', 
                                                  failureRedirect: '/user/sign-in' }));

module.exports = router;
