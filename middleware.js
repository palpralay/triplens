const Listing = require("./models/listing.js");
const ExpressError = require("./utils/expressError.js");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");
const reviews = require("./models/review.js");


module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash('error', 'You need to log in first');
        return res.redirect('/login');
    }
    next();
};

module.exports.savedRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listing/${id}`);
    }
    next();
};


module.exports.isReviewAuthor = async (req, res, next) => {
    const {id, reviewId } = req.params;
    const review = await reviews.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "you're not authorized to do that!");
        return res.redirect(`/listing/${id}`);
    }
    next();
};



module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(404, errMsg);
  } else {
    next();
  }
};

// ------- Review Validation Middleware -------
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};