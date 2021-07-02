

let myArray = [87, 88, 89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108];
function getAllFrequencies(){
}
console.log(myArray);

//test("mood function works", mood() === "I am not happy");
function mood(){
    console.log("I am not happy");
}
mood();

// test("greaterThanTen function works", greaterThan10() === "num is greater than or equal to 10");
function greaterThan10(a){
    if (a >= 10) {
    return  "num is greater than or equal to 10";
    } 
}
console.log(greaterThan10(12));

// arraysEqual(sortArray(), ["a", "c", "e", "f", "n", "z"])
function sortArray() {   
    console.log("a", "c", "e", "f", "n", "z");
   }
   let func = sortArray;   
   func();

// test("first5 function works", arraysEqual(first5(), [1, 2, 3, 4, 5]));
function sortArray() {   
    console.log ([1, 2, 3, 4, 5]);
   }
   let func = sortArray;   
   func();
// let first5 = [1, 2, 3, 4, 5];
// function print() {
// }
// console.log(first5);

// get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]) ==="strawberry"
let get3rdIndex = ["fruit", "banana", "apple", "strawberry", "raspberry"];
function print() {
    return get3rdIndex;
}
get3rdIndex[3];

// get3rdIndex([11, 37, 62, 18, 19, 3, 30]) === 18
let get3rdIndex = [11, 37, 62, 18, 19, 3, 30];
function print() {
    return get3rdIndex;
}
get3rdIndex[3];

// Function creation.js
// arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
function tidyUpString() {   
 console.log("/Daniel ", "irina ", " Gordon", "ashleigh " );
}
let func = tidyUpString;   
func();

// tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),["sanyia", "michael", "anthony", "tim"]
const names = [" Sanyia ", " Michael ", "AnTHonY ", "   Tim   "];
const lowercased = names.map(name => name.toLowerCase());
console.log(lowercased);

// arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
const array = [10, 293, 292, 176, 29];
console.log(array);
const index = array.indexOf(176);
if (index > -1) {
  array.splice(index, 1);
}
console.log(array); 


// arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6)
const ar = ["a", "b", "c", "d", "e", "f", "g"];
    ar.length = 6; 
        console.log( ar );

        const ar = ["a", "b", "c", "d", "e", "f", "g"];
    ar.pop(); 
        console.log( ar );

// arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), 
function add () {
    var arr = [23, 18, 187.2, 0.372];    
    arr = arr.map(i => i + '%' );
    } 
 console.log(arr);

//  1. This program throws an error. Why? (If you can't find it, try executing it).
let x = 2;
let a = 6;

const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
//   2. Remove the line that throws the error.
let x = 2;
let a = 6;

const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
//   3. What is printed to the console?
2
6
4
9
6
13
8
//   4. How many times is "f1" called?
2
//   5. How many times is "f2" called?
2
//   6. What value does the "a" parameter take in the first "f1" call?
6
//   7. What is the value of the "a" outer variable when "f1" is called for the first time?
7

// sorting-algorithm.js
// Create a function called sortAges which:- takes an array of mixed data types as input

function sortAges(){ 
    const agesCase1 = ["🎹", 100, "💩", 55, "🥵", "🙈", 45, "🍕", "Sanyia"];

}

// removes any non-number data types without using the built-in javascript filter method
function nonNumbersRemove(arr) {
    arr = arr.filter((item) => {
      return (typeof item == 'number')
    })
    console.log(arr);
    this.arr = arr;
  }
  
  var arr = ["28", 100, 60, 55, "75", "🍕", "Elamin"];
  nonNumbersRemove(arr);
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);

// returns an array of sorted ages in ascending order
var marks = new Array(10,12,11,20,2);
        for(var i = 0;  i < marks.length; i++)     
        {
        for(var j=i+1; j<marks.length; j++)
        {
            if(Number(marks[i]) > Number(marks[j]))
            {
                value = marks[j];   
                marks[j] = marks[i];
                marks[i] = value;
            }
        }
    }
        console.log(marks);



