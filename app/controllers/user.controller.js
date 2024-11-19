//const User = require("../models/user.model");
const config = require("../config/config.js");
const axios = require("axios");
const UserDb = require("../models/database.model.js");

// 封装 Promise 函数
const createNewUser = (user) => {
  return new Promise((resolve, reject) => {
    UserDb.create(user, (err, data) => {
      if (err) {
        reject(err); // 如果有错误，返回 reject
      } else {
        resolve(data); // 成功时，返回 resolve(data)
      }
    });
  });
};

//http://127.0.0.1:3000/restaurant?latitude=1&longitude=2&radius=3 (meter)
exports.restaurant = async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  console.log(req.query);

  if (!latitude || !longitude || !radius) {
    return res
      .status(400)
      .json({ error: "Latitude and Longitude are required." });
  }

  const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
  let allResults = [];
  let nextPageToken = null;

  do {
    try {
      const url = nextPageToken
        ? `${baseUrl}?pagetoken=${nextPageToken}&key=${config.GoogleKey}`
        : `${baseUrl}?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${config.GoogleKey}`;

      if (nextPageToken)
        await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.get(url);

      if (response.data.status === "OK") {
        allResults = allResults.concat(response.data.results);
        nextPageToken = response.data.next_page_token || null;
      } else {
        console.error(`Error: ${response.data.status}`);
        break;
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      break;
    }
  } while (nextPageToken);
  return res.json({ restaurants: allResults });
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
exports.register = async (req, res) => {
  const { username, password } = req.body;
  //console.log(req.body);
  const user = new UserDb({
    username: username,
    password: password,
  });
  createNewUser(user)
    .then((user) => {
      console.log("User created successfully:", user);
      return res.send({ status: "SUCCESS" });
    })
    .catch((err) => {
      if (err.code === "ER_DUP_ENTRY") {
        return res
          .status(409)
          .send({ status: "ERROR", message: "User already exists." });
      } else {
        console.error("Error creating user:", err);
        return res
          .status(500)
          .send({ status: "ERROR", message: "Something went wrong." });
      }
    });
};
exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  return res.send({ status: "SUCCESS" });
};
