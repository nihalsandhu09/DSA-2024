// Second largest element in an array

// BruteForce

function SortinToReturnSecondLast(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let small = arr[1];
  let largest = arr[n - 1];
  let secondLargest;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] != largest) {
      secondLargest = arr[i];
      break;
    }
  }
  return secondLargest;
}
let a = [1, 2, 4, 7, 7, 5];
let output = SortinToReturnSecondLast(a);
console.log(output);

// Tc  O(n log n + n)

// Better Solution

function SecondLArgest(arr) {
  let largest = arr[0];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  let SecondLArgest = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > SecondLArgest && arr[i] != largest) {
      SecondLArgest = arr[i];
    }
  }
  return SecondLArgest;
}
let arrr = [1, 5, 8, 4, 9, 6, 7, 8];
console.log(SecondLArgest(arrr));

// Time Complexit O(n+n) = O(2n)

// Optimal

function findSecondSmallest() {
  if (arr.length < 2) {
    return -1;
  }
  let small = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
  }
  return secondSmall;
}

function secondLargest2(arr) {
  let largest = arr[0];
  let slargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > slargest) {
      slargest = arr[i];
    }
  }
  return slargest;
}
const arr = [1, 2, 4, 7, 7, 5];
const sS = findSecondSmallest(arr);
const sL = secondLargest2(arr);

console.log("Second smallest is " + sS);
console.log("Second largest is " + sL);
