const names = [
  "big sur",
  "sharks cove",
  "surfer's paradise",
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
  36.257122, //big sur 
  37.003375, //sharks cove
  -28.001068, // surfer's paradise
  -33.767093, //riptide
  -17.609203, // coral reef
  34.008623, // santa monica
  34.000105, // pirates bay
  -8.084848, // club dolphin
  25.617397, //davy jones locker
  25.583959, // bootstrap bill
  21.618939, // chuns reef
  21.597360, // haleiwa
  39.604582, // nazare
  21.664916 // banzai pipeline
];
lng = [
  -121.829201, // big sur
  -122.186819, // sharks cove
  153.432702, // surfers paradise
  151.300328, // riptide
  146.288964, // coral reef
  -118.505304, // santa monica
  -118.809428, // pirates bay
  114.966521, // club dolphin
  -71.176685, // davy jones locker
  -80.107409, // bootstrap bill
  -158.085638, // chuns reef
  -158.104160, // haleiwa
  -9.069669, // nazare
  -158.052918 // banzai pipeline
];

const oahuNames = ["chuns reef", "banzai pipeline", "haleiwa"];
const bayarea = ["big sur", "sharks cove"];
const florida = ["bootstrap bill", "davy jones locker"];
const portugal = ["nazare"];
const indonesia = ["club dolphin"];
const australia = ["coral reef", "surfer's paradise", "riptide"];

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
  "some killer waves", // big sur
  "surf the tsunami", // sharks cove
  "The only vacation spot you ever need", // surfer's paradise
  "ride the high tide", // riptide
  "roll in the deep", // coral reef
  "rocky waves", // santa monica 
  "icy waves", // pirates bay
  "competition central", // club dolphin
  "free boards here", // davy jones locker
  "a place for free surf coaching", // bootstrap bill
  "The hottest place on Earth", // chuns reef
  "Surf with the sharks", // haleiwa
  "Heaven on Earth", //nazare
  "Sunshine point" // banzai pipeline
];

module.exports = names.map((name, idx) => ({
  name: name,
  description: descriptions[idx],
  difficulty: dangerousSpots.includes(name) ?
    "dangerous" : intermediateSpots.includes(name) ?
    "intermediate" : difficultSpots.includes(name) ?
    "difficult" : "beginner",
  city: oahuNames.includes(name) ? "Oahu"
    :
    bayarea.includes(name) ? "Bay Area"
      :
      florida.includes(name) ? "Florida"
        :
        portugal.includes(name) ? "Portugal"
          :
          indonesia.includes(name) ? "Indonesia"
            :
            australia.includes(name) ? "Australia"
              :
              "Los Angeles",
  lat: lat[idx],
  lng: lng[idx],
  photos: photos[name]
}));