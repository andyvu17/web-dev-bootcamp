function average(scores) {
    var total = 0;
    
   scores.forEach(function(scores){
       total += scores;
   });
   
    var average;
    average = total / scores.length;
    
    return Math.round(average);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));