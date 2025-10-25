const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { savedRedirectUrl } = require("../middleware");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res, next) => {  // Add 'next' parameter here
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registerUser = await User.register(newUser, password);
      console.log(registerUser);
      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Registered Successfully!");
        res.redirect("/listing");
      });
    } catch (error) {
      console.error(error);
      req.flash("error", error.message || "Registration failed. Please try again.");
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post(
  "/login",
  (req, res, next) => {
    console.log("Login attempt:", req.body.username);
    next();
  },
  savedRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    failureMessage: true
  }),
  (req, res) => {
    console.log("Login successful for:", req.user.username);
    req.flash("success", "Welcome back!");
    res.redirect(res.locals.redirectUrl || "/listing");
  }
);


router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("success", "Logged out successfully!");
    res.redirect("/listing");
  });
});

module.exports = router;