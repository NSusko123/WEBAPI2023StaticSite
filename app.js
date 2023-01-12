var express = require("express");
var app = express();


//setup a route for static files
app.use(express.static(__dirname+"/static"));

app.get("/", function(req,res){
    //res.send("Welcome to Web API for Games");
    res.sendFile(__dirname+"/static/index.html")
});

app.get("/home", function(req,res){
    res.send("This will be our homepage for now");
});

app.listen(3000, function(){
    console.log("Running on localhost 3000, don't forget to shut me off with ctrl+c");
});

