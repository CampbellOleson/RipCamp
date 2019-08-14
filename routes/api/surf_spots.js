const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const SurfSpot = require("../../models/SurfSpot");
// const validateSurfSpotInput = require("../../validation/surf_spots");

router.get("/city", (req, res) => {
  const city = req.query.city;
  SurfSpot.find({ city: city }).then(spots => {
    const spots_obj = {};
    spots.forEach(spot => (spots_obj[spot.id] = spot));
    if (!spots) {
      res.status(404);
    }
    if (spots.length > 0) {
      res.json(spots_obj);
    } else {
      res.status(404);
      res.json({ msg: "There are no surf spots in your area." });
    }
  });
});

router.get("/spots/:spot_id", (req, res) => {
  SurfSpot.findOne({ _id: req.params.spot_id }).then(spot => {
    if (!spot) {
      res.status(404);
      res.json({ msg: "Spot not found" });
    } else {
      res.json(spot);
    }
  });
});

module.exports = router;
