let add = function (a, b) {
  return a + b;
}

console.log(add(10, 1));


// Default arguments
let getScoreText = function(name, score) {
  console.log(`${name} got a score of ${score}`)
}

getScoreText();

let getScoreText2 = function(name = "You", score = 0) {
  console.log(`${name} got a score of ${score}`)
}

getScoreText2();
getScoreText2('He', 95);
getScoreText2(undefined, 95);
