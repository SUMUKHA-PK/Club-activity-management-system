var mysql = require('mysql');
var EE = require('events')

var e = new EE()

exports.result = function(query){
    var con = mysql.createConnection({
        host: "localhost",
        user: "lab",                                    //Account on local system
        password: "password",                           //Password of account on local system
        database: "SCA"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        con.query(query, function(err,rows,fields){
          if (err) throw err;
          if(rows!=undefined)
          {
            e.emit("rows", rows)
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

      return new Promise((resolve, reject)=>{
            e.on("rows", (rows)=>{
              resolve(rows)
            })
      })
}