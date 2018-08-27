var read = require('readline');
var interface = read.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  interface.on('line', function(line){
    if (line.indexOf("42") != -1) process.exit();
    console.log(line);
});