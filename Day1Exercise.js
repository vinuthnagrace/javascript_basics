//1. Find the Smallest Number from the given three numbers?
// smallestNumber(12,6,9) => 6
// function smallNumber(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// document.write(smallNumber(12, 6, 9));

//2. Find the Largest Number from the given three numbers?
// largestNumber(3,5,15) => 15
// function largestNumber(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// document.write(largestNumber(3, 5, 15));

//3. Find the sum of two numbers?
// sum(4,5) => 9
// function sum(a, b) {
//   return a + b;
// }
// document.write(sum(4, 5));

//4. Find the difference between two numbers?
// subtraction(3,9) => -6
// function sub(a, b) {
//   return a - b;
// }
// document.write(sub(3, 9));

//5. Find the multiplication of two numbers?
// multiplication(4,6) => 24
// function multi(a, b) {
//   return a * b;
// }
// document.write(multi(4, 6));

//6. Find the division of two numbers?
// division(9,3) => 3
// function divd(a, b) {
//   return a / b;
// }
// document.write(divd(9, 3));

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
// areaTriangle(4,5) => 10
// formula : s=side1+side2+side3/2 area of triangle = sqrt s(s-a)(s-b)(s-c)
// function tri(h, b) {
//   return (b * h) / 2;
// }
// document.write(tri(4, 5));

// 9.Function to find the area of the square.
// areaSquare(4) => 16
// function sqr(a) {
//   return a * a;
// }
// document.write(sqr(4));

// 10.Function to find the area of rectangle
// areaRectangle(3,4) => 24
// function rect(l, w) {
//   return l * w;
// }
// document.write(rect(3, 4));

// 11.Find the sum of n numbers.
// sumNumbers(5) => 15
// function sum(n) {
//   return (n * (n + 1)) / 2;
// }
// document.write(sum(5));

// 12.Print all the even numbers up to and including n.
// evenNumbers(9) => 2,4,6,8,9
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function even(i) {
//   for (i = 1; i <= 9; i++) {
//     if (i % 2 == 0) {
//       document.write(i);
//     }
//   }
// }
// even(arr);

//13. Print all the values of Array.
// getArray([1,2,3,4]) => 1,2,3,4
// let array = [1, 2, 3, 4];
// function print() {
//   return;
// }
// document.write(array);

//14. Print all the values of Array in Reverse order.
// getReverseArray([1,2,3,4]) => 4,3,2,1
// let myArray = [1, 2, 3, 4];
// function reverse(i) {
//   let a = 0;
//   let b = i.length - 1;
//   while (a < b) {
//     let c = i[a];
//     i[a] = i[b];
//     i[b] = c;
//     a++;
//     b--;
//   }
// }
// reverse(myArray);
// document.write(myArray);

// let arr = [1, 2, 3, 4];
// let b = arr.reverse()
// document.write(b);

//15. Find the sum of all numbers in an Array.
// 0 - initial value - 1st call of the call back should be 0 in addition and 1 in multiplication
// sumArray[1,2,3,4] => 10
// let array = [1, 2, 3, 4];
// let sum = array.reduce(function (a, b) {
//   return a + b;
// }, 0);
// document.write(sum);
