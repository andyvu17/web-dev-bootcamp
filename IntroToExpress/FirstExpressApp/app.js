var express = require("express");

var app = express();

app.get("/", function(req, res) {
    console.log("someone sent a request");
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("Good-Bye");
});

app.get("/dog", function(req, res) {
    res.send("MEOW");
});

app.get("/r/:subredditName", function(req, res){
   res.send("welcome to subreddit"); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
   var display = req.params.subredditName;
   res.send("welcome to " + display + " page"); 
});

app.get("*", function(req, res) {
    res.send("Your a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});