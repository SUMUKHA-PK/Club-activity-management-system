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
});

var q1 = "CREATE TABLE blah(a int(1));"
var q2 = "select * from Projects;"

    con.query(q2, function(err,rows,fields){
        if (err) throw err;
        //console.log('this.sql', this.sql); 
        //console.log(command);
        console.log(rows[0]);
        //console.log(fields);
        //console.log("TABLE Student created");
    });

con.end(function(err){
    if(err) throw err;
    console.log("Connection terminated");
});
      
