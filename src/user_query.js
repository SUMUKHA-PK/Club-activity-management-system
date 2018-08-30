
var mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var q;                                            //Variable for the query

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
        console.log("TABLE Student created");    //Changes needed
    });

  
  con.end(function(err){
      if(err) throw err;
      console.log("Connection terminated");
    });
});

  rl.close();
});


