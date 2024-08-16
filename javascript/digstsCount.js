//  Digits how to count digits from input number
// Given the number n find out and return the number of digits present in a number

// Brute force Approach
// function countDigits(n) {
//   let count = 0;
//   while (n > 0) {
//     count = count + 1;
//     n = Math.floor(n / 10);
//   }
//   console.log(count);
// }
// extractDigits(12456);

// Optimal approach
function countDigits(n) {
  let count = Math.floor(Math.log10(n) + 1);
  return count;
}
let digts = countDigits(12456);
console.log(digts);
