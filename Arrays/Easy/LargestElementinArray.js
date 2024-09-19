// largest element in an array

let array = [1, 2, 5, 2, 4, 3];

// BruteForce
function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
// const arr1 = [2, 5, 1, 3, 0];
// const arr2 = [8, 10, 5, 7, 9];

// console.log("The Largest element in the array is: " + sortArr(arr1));
// console.log("The Largest element in the array is: " + sortArr(arr2));

// Optimal solution

function findLargestElement(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const arr1 = [2, 5, 1, 3, 0];
let max = findLargestElement(arr1);
console.log("The largest element in the array is: " + max);

const arr2 = [8, 10, 5, 7, 9];
max = findLargestElement(arr2);
console.log("The largest element in the array is: " + max);
