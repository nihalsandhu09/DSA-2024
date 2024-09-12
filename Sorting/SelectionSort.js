// PracticeSelectionSort

function Sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(Sort([4, 5, 8, 9, 10, 25, 45]));

// You are given an array of n integers. Your task is to sort the array in ascending order using the Selection Sort algorithm and return the sorted array.

// Input:
// An integer array arr of size n (where 1 <= n <= 1000).
// Output:
// Return the array sorted in ascending order.

// Input: [29, 10, 14, 37, 13]
// Output: [10, 13, 14, 29, 37]

function Question1(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
console.log(Question1([29, 10, 14, 37, 13]));
