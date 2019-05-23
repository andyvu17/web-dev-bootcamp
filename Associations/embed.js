var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});


var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: "harry@potter.edu",
//   name: "Harry Potter"
// });

// newUser.posts.push({
//     title: "How to brew potions",
//     content: "Just kidding go to class"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(user);
//   }
// });

// var newPost = new Post({
//   title:"Reflections on Apples",
//   content: "They are delicious!"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });

// User.findOne({name: "Harry Potter"}, function(err, user){
//   if(err){
//       console.log(err);
//   } else{
//       user.posts.push({
//           title: "Voldemort",
//           content: "I hate this guy"
//       });
//       user.save(function(err, user){
//           if(err){
//               console.log(err);
//           } else{
//               console.log(user);
//           }
//       });
//   }
// });