const db = require("./db");

const UserDb = function (UserDb) {
  this.username = UserDb.username;
  this.password = UserDb.password;
  //...
};
UserDb.create = function (newUser, result) {
  try {
    db.query("INSERT INTO user SET ?", newUser, (err, res) => {
      if (err) {
        console.log("SQL error: " + err);
        result(err, null);
        return;
      }
      result(null, newUser);
    });
  } catch {
    console.log("Something went wrong when creating.");
  }
};
module.exports = UserDb;
