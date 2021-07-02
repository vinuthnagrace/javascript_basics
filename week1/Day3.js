// 1. Write 3 functions:
// - one that adds 2 numbers together
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

// one that multiplies 2 numbers together
function sum(a, b) {
    return a * b;
  }
  console.log(sum(2, 3));

//   2. Using the variable startingValue as input, perform the following operations using your functions all
//   on one line (assign the result to the variable badCode):
//   - add 10 to startingValue
function zeroPad(num) {
    return num.toString().padStart(3, "10");
  }
    var numbers = [7];
    numbers.forEach(
    function(num) {        
      var paddedNum = zeroPad(num);
        console.log(paddedNum);
    }
  );

//multiply the result by 2
function sum(a, b) {
    return a / b * 2;
  }
  console.log(sum(2, 3));

//   Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
function convertToUSD(a) {
return a * 1.4;
}
console.log(convertToUSD(32));

// Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
function convertToBRL(a) {
return a * 5.7 + 1.71;
}
console.log(convertToBRL(30));