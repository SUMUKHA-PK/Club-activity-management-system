var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sumukha",             //Account on local system
  password: "password"         //Password of account on local system
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE SCA", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});