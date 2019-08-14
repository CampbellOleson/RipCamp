const names = [
  "big sur",
  "sharks cove",
  "riptide",
  "coral reef",
  "santa monica",
  "pirates bay",
  "club dolphin",
  "davy jones locker",
  "bootstrap bill",
  "chuns reef",
  "haliewa",
  "nazare",
  "surfer's paradise"
];

const min_lat = 33.7;
const max_lat = 34;
const min_lng = -118.4;
const max_lng = -118.15;

module.exports = names.map(name => ({
  name: name,
  description: "some killer waves",
  difficulty: "dangerous",
  city: "Los Angeles",
  lat: Math.floor(Math.random() * (max_lat - min_lat + 1)) + min_lat,
  lng: Math.floor(Math.random() * (max_lng - min_lng + 1)) + min_lng
}));
