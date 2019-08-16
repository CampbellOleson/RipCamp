const express = require("express");
// const $ = require("jquery");
// const mongoose = require("mongoose");
const router = express.Router();

const SurfSpot = require("../../models/SurfSpot");

router.get("/filter", (req, res) => {
  const filter = JSON.parse(req.query.filter);
  const nwLat = filter.bounds["northEast"].lat;
  const seLat = filter.bounds["southWest"].lat;
  const nwLng = filter.bounds["northEast"].lng;
  const seLng = filter.bounds["southWest"].lng;

  SurfSpot.find({
    lat: { $gt: seLat, $lt: nwLat }, // currently this query returns an empty array
    lng: { $gt: nwLng, $lt: seLng }
  }).then(spots => {
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
