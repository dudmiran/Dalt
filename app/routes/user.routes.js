module.exports = (app) => {
  const userController = require("../controllers/user.controller");

  app.get("/api/restaurant", userController.restaurant);
  app.post("/api/info", userController.info);
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
};
