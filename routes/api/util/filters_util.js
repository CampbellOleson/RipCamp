const SurfSpot = require("../../../models/SurfSpot");

const findByBounds = bounds => {
  const neLat = bounds["northEast"].lat;
  const swLat = bounds["southWest"].lat;
  const neLng = bounds["northEast"].lng;
  const swLng = bounds["southWest"].lng;

  // console.log(`swLat: ${swLat}`); // for testing
  // console.log(`neLat: ${neLat}`);
  // console.log("--------------------");
  // console.log(`swLng: ${swLng}`);
  // console.log(`neLng: ${neLng}`);

  return SurfSpot.find({
    lat: { $gt: swLat, $lt: neLat },
    lng: { $gt: swLng, $lt: neLng }
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
