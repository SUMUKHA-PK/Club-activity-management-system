const readline = require('readline');
var path = require("path");
var execute = require("./exec_query.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var file_name, table_name;      
var str="";

rl.question('Enter the table name and file name: (comma separated) ', (answer) => {
    var arr = answer.split(",");
    var table_name = arr[0];
    var file_name = arr[1];
    var direc = "'"+ path.resolve(__dirname)+"/"+ file_name + "'";

    var command = "LOAD DATA LOCAL INFILE " + direc + " " + table_name + " FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES  TERMINATED BY '/N' IGNORE 1 LINES;";
   
   console.log(command);

    execute.exec_query(command);
    rl.close(); 
  });
