const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { reviewSchema, listingSchema } = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
//-------Listing validation middleware-------------------------------------------
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(404, errMsg);
  } else {
    next();
  }
};

//----index route to show all listings---------------------------------------------
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listing/index", { allListing });
  })
);
//--------------------------------------------------------------------------------

//--------New route to create a listing-------------------------------------------
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listing/new.ejs");
});

router.post(
  "/",
  isLoggedIn,
  validateListing, 
  wrapAsync(async (req, res, next) => {
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listing");
  })
);
//--------------------------------------------------------------------------------

//-----Edit route to edit a specific listing---------------------------------------
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listing");
    }
    res.render("listing/edit", { listing });
  })
);

//-----Update route to update a specific listing-----------------------------------
router.put(
  "/:id",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (req.body.listing.image && typeof req.body.listing.image === "string") {
      req.body.listing.image = { url: req.body.listing.image };
    }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listing/${id}`);
  })
);
//--------------------------------------------------------------------------------

//----show route to show details of a specific listing----------------------------
router.get(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listing");
    }
    res.render("listing/show", { listing });
  })
);

//-----Delete route to delete a specific listing-----------------------------------
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted Listing:", deletedListing);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listing");
  })
);
//--------------------------------------------------------------------------------

module.exports = router;
