var express    = require("express"),
    mongoose   = require("mongoose"),
    bodyParser = require("body-parser"),
    app        = express();

mongoose.connect("mongodb://localhost:27017/restful", {useNewUrlParser: true});    
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var catSchema = new mongoose.Schema({
   name: String,
   breed: String,
   image: String,
   description: String
});

var Cat = mongoose.model("Cat", catSchema);

//create a cat

// Cat.create({
//     name: "Spicy",
//     breed: "Sphynx",
//     image: "https://images.unsplash.com/photo-1463008420065-8274332e2be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     description: "hairless, soft, and majestic!"
// }, (err, cat)=> {
//     if(err) {
//         console.log("error");
//     } else {
//         console.log(cat);
//     }
// });

//RESTful Routes

app.get("/", (req, res) => {
   res.redirect("/cats");
});

//INDEX
app.get("/cats", (req, res)=>{
   //find cats
   Cat.find({}, (err, cats)=> {
      if(err) {
          console.log("error");
      } else {
          //display cats
          res.render("index", {cats: cats});
      }
   });
});

//NEW
app.get("/cats/new", (req, res) => {
   res.render("new");
});


//CREATE
app.post("/cats", (req, res) => {
   //create new cat
   Cat.create(req.body.cat, (err, newCat) => {
      if(err) {
         console.log("error");
      } else {
         res.redirect("/cats");
      }
   });
});

//SHOW
app.get("/cats/:id", (req, res)=> {
   
});

//EDIT
app.get("/cats/:id/edit", (req, res)=> {
   
});

//UPDATE
app.put("/cats/:id", (req, res)=> {
   
});

//DELETE
app.delete("/cats/:id", (req, res)=> {
   
});

app.listen(process.env.PORT, process.env.IP,function(){
   console.log("server connected"); 
});
