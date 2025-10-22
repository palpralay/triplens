const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const reviews = require("../models/review");
const Listing = require("../models/listing");
const { validateReview, isReviewAuthor } = require("../middleware");
const { isLoggedIn } = require("../middleware");




// ------- Add Review -------
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listing");
    }
    const newReview = new reviews(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    console.log("New Review Added:", newReview);
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
  isLoggedIn,
  isReviewAuthor,
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
