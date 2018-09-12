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
    
    var q1 = "CREATE TABLE Student(Roll_No varchar(13) NOT NULL, First_name varchar(15) NOT NULL, Middle_name varchar(15),Last_name varchar(15),"
             + "Age int(3), Sex varchar(2) NOT NULL, Department varchar(40) NOT NULL, Designation_in_club varchar(20) ," 
             + "SIG varchar(15),PRIMARY KEY(Roll_no))";//, name varchar(45) AS (concat_ws(' ',First_name,Middle_name,Last_name) NOT NULL);";

    var q2 = "CREATE TABLE Clubs(Name varchar(20) NOT NULL, SIG_Head varchar(20) NOT NULL, No_of_Members int(4), Convenor varchar(20) NOT NULL, PRIMARY KEY(Name))";

    var q3 = "CREATE TABLE Projects(Project_ID varchar(10) NOT NULL, Discipline varchar(15) NOT NULL, Start_time varchar(25) NOT NULL,"
             + "End_time varchar(25), Name varchar(25) NOT NULL, Supervising_club varchar(20) NOT NULL, No_students int(2), PRIMARY KEY(Project_ID))";

    var q4 = "CREATE TABLE Events(Name varchar(10) NOT NULL, SIG_Involved varchar(20), Talks_conducted varchar(10), Workshops_conducted varchar(10),"
             + "Flagship_Events varchar(10),Date varchar(15), Club_Name varchar(20), PRIMARY KEY(Name), FOREIGN KEY(Club_name) REFERENCES Clubs(Name));";

    var q5 = "CREATE TABLE Works_On(Roll_No1 varchar(13) NOT NULL, Project_ID1 varchar(10) NOT NULL, No_of_hours int(3), PRIMARY KEY(Roll_No1, Project_ID1),"
             + "FOREIGN KEY (Roll_No1) references Student(Roll_No), FOREIGN KEY (Project_ID1) references Projects(Project_ID));";

    var q6 = "CREATE TABLE Belongs_to(Roll_No varchar(13) NOT NULL,Name varchar(20) NOT NULL, PRIMARY KEY(Roll_No,Name),  FOREIGN KEY (Roll_No) "
             + "references Student(Roll_No), FOREIGN KEY (Name) references Clubs(Name));";

    var q7 = "CREATE TABLE Conduct(Name varchar(20) NOT NULL,Event_name varchar(10) NOT NULL, PRIMARY KEY(Name,Event_name),  FOREIGN KEY (Name) "
             + "references Clubs(Name), FOREIGN KEY (Event_name) references Events(Name));";

    var q8 = "CREATE TABLE Manage(Project_ID varchar(10) NOT NULL,Name varchar(20) NOT NULL, PRIMARY KEY(Project_ID,Name),  FOREIGN KEY (Project_ID) "
             + "references Projects(Project_ID), FOREIGN KEY (Name) references Clubs(Name));";



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

    con.query(q4, function(err,result){
      if(err) throw err;
      console.log("TABLE Events created");
    });

     con.query(q5, function(err,result){
      if(err) throw err;
      console.log("TABLE Works_On created");
    });
      con.query(q6, function(err,result){
      if(err) throw err;
      console.log("TABLE Belongs_to created");
    });
       con.query(q7, function(err,result){
      if(err) throw err;
      console.log("TABLE Conduct created");
    });
        con.query(q8, function(err,result){
      if(err) throw err;
      console.log("TABLE Manage created");
    });

    con.end(function(err){
      if(err) throw err;
      console.log("Connection terminated");
    });
  });