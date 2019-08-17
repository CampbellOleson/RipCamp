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
  "surfer's paradise",
  "banzai pipeline"
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

photos["banzai pipeline"] = [
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/banzai1.jpeg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/danger.jpeg",
  "https://ripcamp-dev.s3-us-west-1.amazonaws.com/pipelinesurfer.jpg"
];

lat = [
  34.006951,
  33.970524,
  33.89579,
  33.827947,
  33.7933,
  33.769399,
  33.738833,
  33.604882,
  33.719811,
  21.620481,
  21.603613,
  33.711100,
  33.741542,
  21.664746
];
lng = [
  -118.499958,
  -118.464906,
  -118.420302,
  -118.392946,
  -118.409029,
  -118.424309,
  -118.112673,
  -118.113567,
  -118.327859,
  -158.084705,
  -158.106276,
  -118.283311,
  -118.379353,
  -158.05309
];

const oahuNames = ["chuns reef", "banzai pipeline", "haleiwa"];

const dangerousSpots = [
  "chuns reef",
  "banzai pipeline",
  "nazare",
  "sharks cove",
  "riptide"
];

const difficultSpots = ["davy jones locker", "bootstrap bill"];

const intermediateSpots = [
  "big sur",
  "coral reef",
  "santa monica",
  "pirates bay",
  "club dolphin"
];

const descriptions = [
  "some killer waves",
  "surf the tsunami",
  "ride the high tide",
  "roll in the deep",
  "rocky waves",
  "icy waves",
  "competition central",
  "free boards here",
  "a place for free surf coaching",
  "The hottest place on Earth",
  "Surf with the sharks",
  "Heaven on Earth",
  "The only vacation spot you ever need",
  "Sunshine point"
];

module.exports = names.map((name, idx) => ({
  name: name,
  description: descriptions[idx],
  difficulty: dangerousSpots.includes(name)
    ? "dangerous"
    : intermediateSpots.includes(name)
    ? "intermediate"
    : difficultSpots.includes(name)
    ? "difficult"
    : "beginner",
  city: oahuNames.includes(name) ? "Oahu" : "Los Angeles",
  lat: lat[idx],
  lng: lng[idx],
  photos: photos[name]
}));
