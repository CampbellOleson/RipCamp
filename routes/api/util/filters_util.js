const SurfSpot = require("../../../models/SurfSpot");

const findByBounds = bounds => {
  const nwLat = bounds["northEast"].lat;
  const seLat = bounds["southWest"].lat;
  const nwLng = bounds["northEast"].lng;
  const seLng = bounds["southWest"].lng;
  return SurfSpot.find({
    lat: { $gt: seLat, $lt: nwLat },
    lng: { $gt: nwLng, $lt: seLng }
  });
};

const findBySearch = searchParam => {
  const query = {
    $or: [{ name: { $regex: searchParam } }, { city: { $regex: searchParam } }]
  };
  return SurfSpot.find(query);
};

module.exports = {
  findByBounds,
  findBySearch
};
