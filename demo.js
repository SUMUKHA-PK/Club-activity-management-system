var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "lab",             //Account on local system
  password: "password"         //Password of account on local system
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});