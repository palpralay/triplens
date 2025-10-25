const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/expressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

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
        delete req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listing");
    }
    
    if (!listing.owner) {
        req.flash("error", "This listing has no owner assigned!");
        return res.redirect("/listing");
    }
    
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listing/${id}`);
    }
    
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    
    if (!review) {
        req.flash("error", "Review not found!");
        return res.redirect(`/listing/${id}`);
    }
    
    if (!review.author) {
        req.flash("error", "This review has no author assigned!");
        return res.redirect(`/listing/${id}`);
    }
    
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You're not authorized to do that!");
        return res.redirect(`/listing/${id}`);
    }
    
    next();
};

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};