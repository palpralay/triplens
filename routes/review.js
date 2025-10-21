const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/expressError");
const reviews = require("../models/review");
const Listing = require("../models/listing");
const { reviewSchema } = require("../schema");

// ------- Review Validation Middleware -------
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// ------- Add Review -------
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listing");
    }
    const newReview = new reviews(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Added Successfully!");
    console.log("New Review Added:", newReview);
    res.redirect(`/listing/${listing._id}`);
  })
);

// ------- Delete Review -------
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    console.log("Delete request - Listing ID:", id, "Review ID:", reviewId);

    // Pull reference from listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Delete review document
    await reviews.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted Successfully!");
    console.log("Review Deleted:", reviewId);
    res.redirect(`/listing/${id}`);
  })
);

module.exports = router;
