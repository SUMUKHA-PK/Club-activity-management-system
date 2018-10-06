const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var file_name, table_name;      
var str="";

rl.question('Enter the table name and file name: (comma separated) ', (answer) => {
    var arr = answer.split(",");
    table_name = arr[0];
    file_name = arr[1];
    console.log(table_name);
    console.log(file_name);
    
   
    var path = document.location.pathname;
    console.log(path);


    //LOAD DATA LOCAL INFILE 'PATH' INTO TABLE TABLENAME FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES  TERMINATED BY '/N' IGNORE 1 LINES;
    rl.close(); 
  });

