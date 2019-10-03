const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurfSpotSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  photos: {
    type: Array
  },
  reviews: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = SurfSpot = mongoose.model("surfspots", SurfSpotSchema);
