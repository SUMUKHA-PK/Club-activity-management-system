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
    
    var q1 = "CREATE TABLE Student(Roll_No varchar(13), First_name varchar(15), Middle_name varchar(15),Last_name varchar(15),"
            + "Age int(3), Sex varchar(2), Department varchar(40), Designation_in_club varchar(20), SIG varchar(15),PRIMARY KEY(Roll_no))";

    var q2 = "CREATE TABLE Clubs(Name varchar(20), SIG_Head varchar(20), No_of_Members int(4), Convenor varchar(20), PRIMARY KEY(Name))";

    var q3 = "CREATE TABLE Projects(Project_ID varchar(10), Discipline varchar(15), Start_time varchar(25),"
              + "End_time varchar(25), Name varchar(25), Supervising_club varchar(20), No_students int(2), PRIMARY KEY(Project_ID))";

    //var q4 = "CREATE TABLE Events(Name varchar(10), Talks_conducted varchar(10), Workshops_conducted varchar(10),";

    con.query(q1, function(err,result){
      if(err) throw err;
      console.log("TABLE Student created");
    });

    con.query(q2, function(err,result){
      if(err) throw err;
      console.log("TABLE Clubs created");
    });

    con.query(q3, function(err,result){
      if(err) throw err;
      console.log("TABLE Projects created");
    });

    con.end(function(err){
      if(err) throw err;
      console.log("Connection terminated");
    });
  });