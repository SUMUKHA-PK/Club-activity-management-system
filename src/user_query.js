
var mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var q;

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
q=answer;
console.log(`Thank you for your valuable feedback: ${q}`);



      var con = mysql.createConnection({
        host: "localhost",
        user: "lab",                 //Account on local system
        password: "password",        //Password of account on local system
        database: "SCA"
      });
  
  

      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        



            con.query(q, function(err,result){
                  if(err) throw err;
                  console.log("TABLE Student created");
              });

            
            con.end(function(err){
                if(err) throw err;
                console.log("Connection terminated");
              });
     });

  rl.close();
});


