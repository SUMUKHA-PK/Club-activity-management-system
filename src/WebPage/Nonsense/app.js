var express=require('express');
var fs = require('fs');
var  path = require('path')

var app=express();

var engines = require('consolidate');

app.set('views', __dirname);
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//app.use(express.static(path.join(__dirname, 'Webpage')));
app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/index1',function(req,res){
    res.render('index1.html');
});

var server=app.listen(3000,function() {});