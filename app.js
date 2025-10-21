//-------------------------------importing modules--------------------------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {isLoggedIn} = require("./middleware.js");

//----session configuration------------------------------------------------
const sessionConfig = {
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

//-------------------------------connected to mongoDB-----------------------------
const MONGO_URL = "mongodb://127.0.0.1:27017/triplens";
async function main() { 
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });



//-------------------------------middleware---------------------------------------
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//--------flash msg---------------------------------------------------------------
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
   res.locals.currentUser = req.user;
  next();
});

app.use("/", userRouter);
app.use("/listing", listingRouter);
app.use("/listing/:id/reviews", reviewRoutes);







//-------------------------------RESTful routes-----------------------------------
app.get("/", (req, res) => {
  res.send("working");
});


//-----------------------------handling 404 error---------------------------------
app.use((req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});


//-----------------------------error handling-------------------------------------
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.render("error.ejs", { statusCode, message });
});



//-------------------------------server listening---------------------------------
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});