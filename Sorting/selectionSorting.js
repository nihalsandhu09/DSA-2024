/**Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the minimum element from the unsorted portion of the array and swapping it with the first unsorted element. Here's how it works step-by-step:

Start from the first element: Assume it as the minimum.
Compare this minimum with the rest of the array: If any element is smaller than the current minimum, update the minimum.
Swap the found minimum element with the first element.
Move to the next element and repeat steps 1-3 for the remaining array.
Continue this process until the array is sorted. */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let temp = arr[minimumIndex];
    arr[minimumIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([4, 5, 9, 7, 8, 6, 45]));

function SeelctionSort(arr) {
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
console.log(SeelctionSort([4, 5, 9, 7, 8, 6, 45]));

function selectionSortDescending(arr) {
  // Your code here
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;
  }
  return arr;
}

function selectionSort2(arr) {
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
console.log(selectionSort2([3, 1, 2, 4, 7, 6, 5]));
// Example usage
// let array = [64, 25, 12, 22, 11];
// console.log(selectionSortDescending(array));
// Output: [64, 25, 22, 12, 11]

// SortEvenODD

function sortEvenOdd(arr) {
  // Your code here
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  for (let i = 0; i < even.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < even.length; j++) {
      if (even[i] < even[minIndex]) {
        minIndex = j;
      }
    }
    let temp = even[i];
    even[i] = even[minIndex];
    even[minIndex] = temp;
  }

  for (let i = 0; i < odd.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < odd.length; j++) {
      if (odd[j] > odd[maxIndex]) {
        maxIndex = j;
      }
    }
    let temp = odd[i];
    odd[i] = odd[maxIndex];
    odd[maxIndex] = temp;
  }

  let index = 0;
  for (let i = 0; i < even.length; i++) {
    arr[index++] = even[i];
  }
  for (let i = 0; i < odd.length; i++) {
    arr[index++] = odd[i];
  }
  return arr;
}

// Example usage
let array = [3, 1, 2, 4, 7, 6, 5];
console.log(sortEvenOdd(array));
// Output: [2, 4, 6, 7, 5, 3, 1]
