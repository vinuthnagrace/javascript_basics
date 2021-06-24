//1. Find the Smallest Number from the given three numbers?
// smallestNumber(12,6,9) => 6
// let a = 12;
// b = 6;
// c = 9;
// if (a <= b && a <= c) {
//   document.write(a);
// } else if (b <= a && b <= c) {
//   document.write(b);
// } else {
//   document.write(c);
// }

//2. Find the Largest Number from the given three numbers?
// largestNumber(3,5,15) => 15
// let a = 3;
// b = 5;
// c = 15;
// if (a >= b && a >= c) {
//   document.write(a);
// } else if (b >= a && b >= c) {
//   document.write(b);
// } else {
//   document.write(c);
// }

//3. Find the sum of two numbers?
// sum(4,5) => 9
// let a = 4;
// b = 5;
// c = a + b;
// document.write(c);

//4. Find the difference between two numbers?
// subtraction(3,9) => -6
// let a = 3;
// b = 9;
// c = a - b;
// document.write(c);

//5. Find the multiplication of two numbers?
// multiplication(4,6) => 24
// let a = 4;
// b = 6;
// c = a * b;
// document.write(c);

//6. Find the division of two numbers?
// division(9,3) => 3
// let a = 9;
// b = 3;
// c = a / b;
// document.write(c);

// 7.Print the below format, using loops
//  #
//  ##
//  ###
//  ####
//  #####
//  ######
//  #######
// function hash(n) {
//   let a = 1;
//   b = 0;
//   for (let a = 1; a <= n; ) {
//     if (b < a) {
//       document.write("#");
//       b++;
//       continue;
//     }
//     if (b == a) {
//       document.write("<br>");
//       a++;
//       b = 0;
//     }
//   }
// }
// hash(7);

//8.Function to find the area of a triangle.
// areaTriangle(4,5,6) => 9.92
// formula : s=side1+side2+side3/2 area of triangle = sqrt s(s-a)(s-b)(s-c)
// let b = 4;
// h = 5;
// result = (b * h) / 2;
// document.write(result);

// 9.Function to find the area of the square.
// areaSquare(4) => 16
// let a = 4;
// square = a * a;
// document.write(square);

// 10.Function to find the area of rectangle
// areaRectangle(3,4) => 24
// let length = 3;
// width = 4;
// area = length * width;
// document.write(area);

// 11.Find the sum of n numbers.
// sumNumbers(5) => 15
// n*(n+1)/2
// let a = 5;
// b = (a * (a + 1)) / 2;
// document.write(b);

// 12.Print all the even numbers up to and including n.
// evenNumbers(9) => 2,4,6,8,9

// for (i = 1; i <= 9; i++) {
//   if (i % 2 == 0) {
//     document.write(i);
//   }
// }

//13. Print all the values of Array.
// getArray([1,2,3,4]) => 1,2,3,4
// let array = [1, 2, 3, 4];
// document.write(array);

//14. Print all the values of Array in Reverse order.
// getReverseArray([1,2,3,4]) => 4,3,2,1
// let arr = [1, 2, 3, 4];
// b = arr.reverse();
// document.write(b);

//15. Find the sum of all numbers in an Array.
// sumArray[1,2,3,4] => 10
// let array = [1, 2, 3, 4];
// let sum = array.reduce(function (a, b) {
//   return a + b;
// }, 0);
// document.write(sum);
