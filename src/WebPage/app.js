var express=require('express');
var app=express();
var execute = require('../Database/query_runner.js');
var D;
app.set('views',__dirname + '/views');
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
    res.render('./index.ejs', {data  : []});
    });
    
app.get('/search',function(req,res){

    execute.exec_query("SELECT * FROM " + JSON.stringify(req.query.key).replace(/\"/g, ""));
    console.log(JSON.stringify(req.query.key).replace(/\"/g, ""));
});

// app.get('/clicked_Student', async (req, res) => {
  
//     try{
//         var data = await execute.result("SELECT * FROM Student");
//     }
//     catch(e){
//         throw e
//     }
//     res.render('./index.ejs', {data})
// });

console.log(D);

app.post('/clicked_Customer', (req, res) => {
    //const click = {clickTime: new Date()};
    console.log("Clicked Customer!");
});

app.post('/clicked_Events', (req, res) => {
    //const click = {clickTime: new Date()};
    console.log("Clicked Events!");
});

app.post('/clicked_Projects', (req, res) => {
    //const click = {clickTime: new Date()};
    console.log("Clicked Projects!");
});

var server=app.listen(3000,function(){
    console.log("We have started our server on port 3000");
    });