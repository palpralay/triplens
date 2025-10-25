//------------------ Load Environment Variables ------------------
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//------------------ Import Modules ------------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const multer = require("multer");

const User = require("./models/user.js");
const ExpressError = require("./utils/expressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const upload = multer({ dest: "uploads/" });

//------------------ Database Connection ------------------
const dbUrl = process.env.ATLASDB_URL;

mongoose.connect(dbUrl)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("DB Connection Error:", err));

//------------------ EJS & Middleware ------------------
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//------------------ Session Configuration ------------------
const store = mongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
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
    secure: process.env.NODE_ENV === 'production',
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

//------------------ Passport Configuration ------------------
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//------------------ Flash Messages Middleware ------------------
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  res.locals.currUser = req.user;
  next();
});

//------------------ Routes ------------------
app.use("/", userRouter);
app.use("/listing", listingRouter);
app.use("/listing/:id/reviews", reviewRoutes);

//------------------ Health Check ------------------
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

//------------------ 404 Error Handling ------------------
app.use((req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

//------------------ General Error Handling ------------------
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { statusCode, message });
});

//------------------ Server Listening ------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});