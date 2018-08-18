// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(val1, cb) {
    orm.insertOne("burgers", "name", val1, function(res) {
      cb(res);
    });
  },
  update: function(objToSql, val1, cb) {
    orm.updateOne("burgers", objToSql, val1, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
