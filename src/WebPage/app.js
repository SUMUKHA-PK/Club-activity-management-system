var express=require('express');
var app=express();
var execute = require('../Database/query_runner.js');
var execute1 = require('../Database/runs_query.js');

var logged_in = require('./routes/logged_in')
var update = require('./routes/update')

var bodyParser = require('body-parser')

app.set('views',__dirname + '/views');
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/logged_in", logged_in)
app.use("/update", update)

app.get('/',function(req,res){
    res.render('./index.ejs', {data  : []});
    });

app.get('/search',async (req,res)=>{

    execute1.result("SELECT * FROM " + JSON.stringify(req.query.key).replace(/\"/g, ""));
    console.log(JSON.stringify(req.query.key).replace(/\"/g, ""));
});


// convenors

app.get('/ieee_con', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club = \"convenor\" AND Club =  \"IEEE\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/ie_con', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club = \"convenor\" AND Club =  \"IE\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/acm_con', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club = \"convenor\" AND Club =  \"ACM\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/iste_con', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club = \"convenor\" AND Club =  \"ISTE\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});

/* EXECUTIVE MEMBERS */
//executive members of ieee

app.get('/ieee_m1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IEEE\" AND SIG = \"compsoc\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/ieee_m2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IEEE\" AND SIG = \"diode\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/ieee_m3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IEEE\" AND SIG = \"piston\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});

 //executive members of ie
app.get('/ie_m1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IE\" AND SIG = \"code\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/ie_m2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IE\" AND SIG = \"gadget\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/ie_m3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IE\" AND SIG = \"garage\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});

//executive members of acm
app.get('/acm_m1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"ACM\" AND SIG = \"sanganitra\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/acm_m2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"ACM\" AND SIG = \"vidyut\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/acm_m3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IEEE\" AND SIG = \"yantrika\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});

//executive members of ieee
app.get('/iste_m1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"ISTE\" AND SIG = \"Charge\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/iste_m2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IEEE\" AND SIG = \"crypt\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});
app.get('/iste_m3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Student WHERE Designation_in_club != \"convenor\" AND Club =  \"IEEE\" AND SIG = \"clutch\"");
    }
    catch(e){
        throw e
    }
    res.render('./Student.ejs', {data})
});

app.get('/login', async (req, res) => {

    res.render('login.ejs')
});

/* Project */
//Project of ieee

app.get('/ieee_p1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"IEEE\" AND SIG = \"compsoc\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/ieee_p2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"IEEE\" AND SIG = \"diode\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/ieee_p3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"IEEE\" AND SIG = \"piston\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});

// Project of ie

app.get('/ie_p1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"IE\" AND SIG = \"code\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/ie_p2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"IE\" AND SIG = \"gadget\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/ie_p3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"IE\" AND SIG = \"garage\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});

// Project of acm

app.get('/acm_p1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"ACM\" AND SIG = \"sanganitra\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/acm_p2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"ACM\" AND SIG = \"vidyut\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/acm_p3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"ACM\" AND SIG = \"yantrika\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});

// Project of iste
app.get('/iste_p1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"ISTE\" AND SIG = \"Charge\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/iste_p2', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"ISTE\" AND SIG = \"Crypt\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});
app.get('/iste_p3', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Project WHERE Supervising_club =  \"ISTE\" AND SIG = \"Clutch\"");
    }
    catch(e){
        throw e
    }
    res.render('./Project.ejs', {data})
});

/* Event */

//Event of ieee
app.get('/ieee_e1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Event WHERE Club_Name =  \"IEEE\"");
    }
    catch(e){
        throw e
    }
    res.render('./Event.ejs', {data})
});

//Event of ie
app.get('/ie_e1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Event WHERE Club_Name =  \"IE\"");
    }
    catch(e){
        throw e
    }
    res.render('./Event.ejs', {data})
});

//Event of acm
app.get('/acm_e1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Event WHERE Club_Name =  \"ACM\"");
    }
    catch(e){
        throw e
    }
    res.render('./Event.ejs', {data})
});

//Event of iste
app.get('/iste_e1', async (req, res) => {

    try{
        var data = await execute.result("SELECT * FROM Event WHERE Club_Name =  \"ISTE\"");
    }
    catch(e){
        throw e
    }
    res.render('./Event.ejs', {data})
});

app.post("/", (req, res)=>{
    console.log(req.body)
})



var server=app.listen(3000,function(){
    console.log("We have started our server on port 3000");
    });
