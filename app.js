const mongoose = require("mongoose");
const path = require("path");
const express = require("express"); // the actual
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const passport = require("passport");
const bodyParser = require("body-parser");
const surfSpots = require("./routes/api/surf_spots");
// const seeds = require("./seeds");
// const SurfSpot = require("./models/SurfSpot");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
// .then(SurfSpot.collection.insert(seeds))
// .then(console.log("Succesfully seeded MongoDB"));

app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api", surfSpots);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
