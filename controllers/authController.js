exports.signIn = function(req, res, next) {
  res.render("user/sign_in");
}

exports.signUp = function(req, res, next) {
  res.render("user/sign_up");
}
