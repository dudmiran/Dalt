module.exports = (app) => {
  const userController = require("../controllers/user.controller");

  app.get("/restaurant", userController.restaurant);
  app.post("/info", userController.info);
};
