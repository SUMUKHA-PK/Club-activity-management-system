var express=require('express');
var app=express();
var execute = require('../Database/exec_query.js');

app.set('views',__dirname + './views');
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
    res.render('./index.html');
    });
    
app.get('/search',function(req,res){

    execute.exec_query("SELECT * FROM " + JSON.stringify(req.query.key).replace(/\"/g, ""));
    console.log(JSON.stringify(req.query.key).replace(/\"/g, ""));
});

var server=app.listen(3000,function(){
    console.log("We have started our server on port 3000");
    });