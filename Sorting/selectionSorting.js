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
