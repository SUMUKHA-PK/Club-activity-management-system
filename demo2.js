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

  rl.close();
});