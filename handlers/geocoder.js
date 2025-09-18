const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "openstreetmap",
  formatter: "json",
  timeout: 10000,
};

const geocoder = NodeGeocoder(options);
module.exports = geocoder;
