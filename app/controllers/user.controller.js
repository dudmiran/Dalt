const User = require("../models/user.model");
const config = require("../config/config.js");
const axios = require("axios");

//http://127.0.0.1:3000/restaurant?latitude=1&longitude=2&radius=3 (meter)
exports.restaurant = async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  console.log(req.query);

  if (!latitude || !longitude || !radius) {
    return res
      .status(400)
      .json({ error: "Latitude and Longitude are required." });
  }

  try {
    const type = "restaurant";
    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${config.GoogleKey}`;

    // Use axios get Google Places API
    const response = await axios.get(googleApiUrl);

    //console.log(response);
    // Check Google API response
    if (response.data.status === "OK") {
      return res.json({ restaurants: response.data.results });
    } else {
      return res
        .status(500)
        .json({ error: `Google API error: ${response.data.status}` });
    }
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch data from Google Places API",
      details: error.message,
    });
  }
};
exports.info = async (req, res) => {
  const {
    name,
    age,
    distance,
    longitude,
    latitude,
    foodType,
    drinkType,
    cuisine,
  } = req.body;
  console.log(req.body);
  return res.send({ status: "SUCCESS" });
};
