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
  "haleiwa",
  "nazare",
  "surfer's paradise"
];

const photos = {};
photos["big sur"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/big_sur_surf.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/big_sur2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/big_sur3.png"
];
photos["sharks cove"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/sharks_cove.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/sharks_cove2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/sharks_cove3.jpg"
];
photos["riptide"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/riptide.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/riptide2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/riptide3.jpg"
];
photos["coral reef"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/coral_reef.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/coral_reef2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/coral_reef3.jpg"
];
photos["santa monica"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/santa_monica.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/santa_monica2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/santa_monica3.jpg"
];
photos["pirates bay"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/pirates_bay.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/pirates_bay2.jpeg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/pirates_bay3.jpg"
];
photos["club dolphin"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/club_dolphin.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/club_dolphin2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/club_dolphin3.jpg"
];
photos["davy jones locker"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/davy_jones_locker.png",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/davy_jones_locker2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/davy_jones_locker3.jpg"
];
photos["bootstrap bill"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/bootstrap_bill.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/bootstrap_bill2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/bootstrap_bill3.jpg"
];
photos["chuns reef"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/chuns_reef.jpeg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/chuns_reef2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/chuns_reef3.jpg"
];
photos["haleiwa"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/haleiwa.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/haleiwa2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/haleiwa3.jpeg"
];
photos["nazare"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/nazare.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/nazare2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/nazare3.jpg"
];
photos["surfer's paradise"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/surfers_paradise.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/surfers_paradise2.jpg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/surfers_paradise3.jpg"
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
  lng: Math.floor(Math.random() * (max_lng - min_lng + 1)) + min_lng,
  photos: photos[name]
}));
