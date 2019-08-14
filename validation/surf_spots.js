const validText = require("./valid-text");
const Validator = require("validator");

module.exports = function validateSurfSpotInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.lng)) {
    errors.lng = "Longitude field is required";
  }
  if (Validator.isEmpty(data.lat)) {
    errors.lat = "Latitude field is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (
    !["beginner", "intermediate", "difficult", "dangerous"].includes(data.name)
  ) {
    errors.difficulty =
      "Difficuly level must be one of the options (beginner, intermediate, difficult, dangerous)";
  }
};
