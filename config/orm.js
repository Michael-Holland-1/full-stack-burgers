var connection = require("../config/connection.js");

var orm = {
  // select all
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
  
  // insert one record
  insertOne: function(table, column1, column2, valCol1, valCol2) {
    var queryString = "INSERT INTO ?? (?? ??) VALUES (?? ??)";
    console.log(queryString);
    connection.query(queryString, [table, column1, column2, valCol1, valCol2], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  
  // update one record
  updateOne: function(table, columnToUpdate, valueToUpdate, colWhere, valWhere) {
  
    var queryString = "UPDATE ?? SET (?? = ?) WHERE (?? = ?)";
    console.log(queryString);
    connection.query(queryString, [table, columnToUpdate, valueToUpdate, colWhere, valWhere], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }

};

module.exports = orm;