if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}
console.log(process.env.SECRET);

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
const mongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const multer = require("multer");
const { log } = require("console");
const upload = multer({ dest: "uploads/" });
const dbUrl = process.env.ATLASDB_URL;

//----session configuration------------------------------------------------
const store = mongoStore.create({
  mongoUrl: dbUrl,
  crypto : {
    secret:process.env.SECRET
  },
  touchAfter: 24 * 3600,
});


store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e);
});

const sessionConfig = {
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};



//-------------------------------connected to mongoDB-----------------------------
// const MONGO_URL = "mongodb://127.0.0.1:27017/triplens";
async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

//-------------------------------middleware---------------------------------------
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Session & Passport should come BEFORE routes
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
  res.locals.currUser = req.user;
  next();
});


app.use("/", userRouter);
app.use("/listing", listingRouter);
app.use("/listing/:id/reviews", reviewRoutes);

//-------------------------------RESTful routes-----------------------------------
// app.get("/", (req, res) => {
//   res.send("working");
// });

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
