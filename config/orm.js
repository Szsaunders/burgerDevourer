var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableSelection) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableSelection], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, col1, val1) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, col1, val1], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, objCol, val1) {
    var queryString =
      "UPDATE ?? SET ?? WHERE ?"
    connection.query(
      queryString,
      [table, objToSql(objCol), val1],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;

