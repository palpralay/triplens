const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listing/index", { allListing });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listing/new.ejs");
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listing");
  }
  res.render("listing/edit", { listing });
};

module.exports.postListing = async (req, res) => {
  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listing");
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  if (req.body.listing.image && typeof req.body.listing.image === "string") {
    req.body.listing.image = { url: req.body.listing.image };
  }
  let listing = await Listing.findById(id);

  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listing/${id}`);
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("reviews")
    .populate("owner")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
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
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log("Deleted Listing:", deletedListing);
  req.flash("success", "Listing Deleted Successfully!");
  res.redirect("/listing");
};
