var express = require("express");
var app = express();


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server has started"); 
});