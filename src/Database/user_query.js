var r= require("./read_delete.js");
var mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var q;      
var str="";

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
  
  con.query(q, function(err,rows,fields){
    if (err) throw err;
    if(rows!="undefined")
    {
      for(i=0;i<rows.length;i++)
      {
        console.log(rows[i]);//.fields[i].name);
      }
      // for(i=0;i<fields.length;i++)
      // {
      //   console.log(fields[i].name);
      // }
    }
    else
    {
      console.log("Query executed");
    }
  });

  con.end(function(err){
      if(err) throw err;
      console.log("Connection terminated");
    });
});
  
  //r.read_delete(str);
  console.log(str);
  rl.close();
});

