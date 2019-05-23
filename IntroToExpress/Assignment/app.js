var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi There Welcome to my Assignment");
});

app.get("/speak/:animal",function(req, res){
   var sounds = {
       pig: "Oink",
       dog: "Woof",
       cat: "Meow",
       bird: "Chirp",
       fish: "..."
   };
   var animal = req.params.animal.toLowerCase();
   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:number", function(req, res){
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var result = "";
    
    for(var i = 0; i < number; i++) {
        result += word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life??") 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started");
});