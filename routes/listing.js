const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");

const multer = require("multer");
const { storage, cloudinary } = require("../cloudeConfig.js");
const upload = multer({ storage });

const mbxGeocoading = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocoadingClient = mbxGeocoading({ accessToken: mapToken });

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
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(async (req, res) => {
    const response = await geocoadingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();
    console.log(response.body.features[0].geometry);

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing({
      ...req.body.listing,
      owner: req.user._id,
    });
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    
    await newListing.save();
    req.flash("success", "Successfully created a listing!");
    res.redirect(`/listing/${newListing._id}`);
  })
);

//--------------------------------------------------------------------------------------------------
// Suggestions endpoint for autocomplete
router.get(
  "/suggestions",
  wrapAsync(async (req, res) => {
    const { q } = req.query;
    
    if (!q || q.trim() === "") {
      return res.json([]);
    }

    const suggestions = await Listing.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
        { country: { $regex: q, $options: "i" } }
      ]
    })
    .limit(5)
    .select('title location country');

    res.json(suggestions);
  })
);

// Add this BEFORE the "/:id" route to avoid conflicts
router.get(
  "/search",
  wrapAsync(async (req, res) => {
    const { q } = req.query;
    
    if (!q || q.trim() === "") {
      req.flash("error", "Please enter a search term");
      return res.redirect("/listing");
    }

    try {
      // Use MongoDB text search for better performance
      const searchResults = await Listing.find(
        { $text: { $search: q } },
        { score: { $meta: "textScore" } }
      ).sort({ score: { $meta: "textScore" } });
      res.render("listing/index", { 
        allListing: searchResults,
        searchQuery: q 
      });
    } catch (error) {
      console.error("Search error:", error);
      // Fallback to regex search if text index not available
      const searchResults = await Listing.find({
        $or: [
          { title: { $regex: q, $options: "i" } },
          { location: { $regex: q, $options: "i" } },
          { country: { $regex: q, $options: "i" } },
          { description: { $regex: q, $options: "i" } }
        ]
      });

      res.render("listing/index", { 
        allListing: searchResults,
        searchQuery: q 
      });
    }
  })
);
//-----------------------------------------------------------------------------------------------------------------

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
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    Object.assign(listing, req.body.listing);

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    await listing.save();
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
