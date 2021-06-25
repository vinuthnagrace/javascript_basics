// There are syntax errors in this code - can you fix it to pass the tests?

// function addNumbers(a b c) {
function addNumbers(a, b, c) {
  return a + b + c;
}
console.log(addNumbers(3, 4, 6));
// there should be commas between parameters

// function introduceMe(name, age) {
// return "Hello, my name is " + name "and I am " age + "years old";
// }
function introduceMe(name, age) {
  console.log("Hello, my name is " + name + "and I am " + age + "years old");
}
introduceMe("Sonjide", 27);
// should insert + symbol to add text between parameters ex: name +"text" + age

function getRemainder(a, b) {
  return a % b;
}
console.log(getRemainder(23, 5));
// should give return and only one %
// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
  return word;
}
console.log(trimWord("CodeYourFuture"));
// return wordtrim();
//should return word;

function getWordLength() {
  console.log("A wild sentence appeared!".length);
}
getWordLength();
// return "word".length()
// shouldnot keep ""

function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 6));
// a * b * c;
// return;
// should return a* b* c shouldnot keep parameters and return in two lines

function func() {
  var str = "code";
  var value = str.concat(" your", " future");
  console.log(value);
}
func();
// three words concatenate

// Add comments to explain what this function does. You're meant to use Google!
// function s(w1, w2) {
//   return w1.concat(w2);
// }
function func() {
  var str = "I";
  var value = str.concat(" like", " pizza");
  console.log(value);
}
func();
// concatenate 3 words

function func() {
  var str = "I";
  var value = str.concat(" am ", 13);
  console.log(value);
}
func();
// concatenate 2 words and one number
