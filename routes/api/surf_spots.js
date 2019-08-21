const express = require("express");
const SearchUtil = require("./util/filters_util");
const SurfSpot = require("../../models/SurfSpot");
const router = express.Router();

router.get("/filter", (req, res) => {
  const filter = JSON.parse(req.query.filter);
  const searchPromise = filter.search
    ? SearchUtil.findBySearch(filter.search)
    : filter.bounds
    ? SearchUtil.findByBounds(filter.bounds)
    : null;

  if (searchPromise) {
    searchPromise.then(spots => {
      if (spots) {
        const spots_obj = {};
        spots.forEach(spot => (spots_obj[spot.id] = spot));
        res.json(spots_obj);
      } else {
        res.status(404);
        res.json({ msg: "Couldn't find surf spots, something went wrong." });
      }
    });
  }
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