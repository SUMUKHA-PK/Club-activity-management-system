var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "lab",                 //Account on local system
    password: "password",        //Password of account on local system
    database: "SCA"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

var q1 = "CREATE TABLE blah(g int(1));"

con.query(q1, function(err,results){
    if (err) {
        console.log('this.sql', this.sql); //command/query
        console.log(command);
        console.log("ERROR" + results);
        console.log(err);
        return;
    }
    console.log('this.sql', this.sql); //command/query
    //console.log(command);
    console.log("good"+  results);
    console.log("TABLE Student created");
});

con.end(function(err){
    if(err) throw err;
    console.log("Connection terminated");
    });
      
});