const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");

//----show all listings---------
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listing/index", { allListing });
  })
);

//----create a listing----------
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listing/new.ejs");
});

router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listing");
  })
);

//-----Edit route---------------
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
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

//-----Update route-------------
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (req.body.listing.image && typeof req.body.listing.image === "string") {
      req.body.listing.image = { url: req.body.listing.image };
    }
    let listing = await Listing.findById(id);

    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listing/${id}`);
  })
);

//----show route-------------
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate("reviews")
      .populate("owner")
      .populate({
        path: "reviews",
        populate: {
          path: "author"
        },
      });
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listing");
    }
    res.render("listing/show", {
      listing,
      currUser: req.user,
    });
  })
);

//-----Delete route----------------
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted Listing:", deletedListing);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listing");
  })
);

module.exports = router;
