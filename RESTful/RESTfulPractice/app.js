var express = require("express")
var app     = express(),
bodyParser  = require("body-parser"),
mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/restful_practice");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//model config
var movieSchema = new mongoose.Schema({
   title: String,
   image: String,
   created: Date,
   plot: String
});
var Movie = mongoose.model("Movie", movieSchema);

app.get("/", function(req, res) {
   res.redirect("/movies"); 
});

//Index Route
app.get("/movies", function(req, res){
   Movie.find({}, function(err, movies){
      if(err){
          console.log(err);
      } else {
          res.render("index", {movies: movies});
      }
   });
});

//New Route
app.get("/movies/new", function(req, res){
   res.render("new"); 
});

//Create Route
app.post("/movies", function(req, res){
    Movie.create(req.body.movie, function(err, newMovie){
       if(err){
           console.log(err);
       } else {
           res.redirect("/movies");
       }
    });  
});

//Show Route
app.get("/movies/:id", function(req, res) {
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            res.redirect("/movies");
            alert("error!");
        } else{
            res.render("show", {movie: foundMovie});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server running"); 
});