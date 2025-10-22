const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

//----show all listings---------
router.get("/", wrapAsync(listingController.index));

//----create a listing----------
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

//-----Create route--------------
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.postListing)
);

//----show route-------------
router.get("/:id", wrapAsync(listingController.showListing));

//-----Edit route---------------
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

//-----Update route-------------
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing)
);

//-----Delete route----------------
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deleteListing)
);

module.exports = router;
