/**Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. This process is repeated until the list is sorted.

How Bubble Sort Works
Pass through the list: Start at the beginning of the list.
Compare adjacent elements: Compare each pair of adjacent elements.
Swap if necessary: If the elements are in the wrong order, swap them.
Repeat: Repeat the process for the entire list. Each pass through the list will move the next largest element to its correct position.
End when sorted: The algorithm repeats until no more swaps are needed, indicating that the list is sorted. */

// function BubbleSort(arr) {

//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; i++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(BubbleSort([7, 8, 9, 4, 45, 85]));

// // Q1 Sort this array

// function Sort(array) {
//   for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array.length - index - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// let arr = [5, 1, 4, 2, 8];
// const output = Sort(arr);
// console.log(output);

// function Sort2(array) {
//   let count = 0;
//   for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array.length - index - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j + 1] = temp;
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(Sort2([5, 1, 4, 2, 8]));

// function BubbleSort2(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(BubbleSort2([5, 1, 4, 2, 8]));

/**You are given a list of n integers. Each integer represents a weight of an object. Your task is to sort the array in ascending order using the Bubble Sort algorithm. After sorting, calculate the sum of the first k smallest elements in the array.

Input:
An integer array arr of size n (where 1 <= n <= 1000).
An integer k (where 1 <= k <= n).
Output:
Return the sum of the first k smallest elements in the sorted array. */

function Sort(arr, k) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
    console.log("swaped");
  }

  return arr;
}

const sorted = Sort([9, 9, 9, 9, 10]);

console.log(sorted);
