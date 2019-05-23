var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

var Cat = mongoose.model("Cat", catSchema);

// var kiki = new Cat({
//   name: "Mrs.Norris",
//   age: "150",
//   breed: "Tabby"
// });

// kiki.save(function(err, cat){
//     if(err){
//         console.log("something went wrong")
//     } else{
//         console.log("we just saved a cat");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Fluffy",
    age: "1",
    breed: "bengal"
}, function(err, cat){
   if(err){
       console.log(err);
   } else{
       console.log(cat);
   }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("oh no error");
        console.log(err);
    }else{
        console.log("all the cats...")
        console.log(cats);
    }
});