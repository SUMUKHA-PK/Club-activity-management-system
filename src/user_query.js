var r= require("./read_delete.js");
var mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var q;      
var str="";
//var path = __dirname  
// console.log(path)                                   //Variable for the query

rl.question('Enter the query ', (answer) => {
q=answer;

var con = mysql.createConnection({
  host: "localhost",
  user: "lab",                                    //Account on local system
  password: "password",                           //Password of account on local system
  database: "SCA"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(q, function(err,result){
        if(err) throw err;
    });

  con.end(function(err){
      if(err) throw err;
      console.log("Connection terminated");
    });
});
  
  r.read_delete(str);
  console.log(str);
  rl.close();
});


