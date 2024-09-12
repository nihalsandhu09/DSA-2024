function InsertioSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    let j = i - 1;

    // The condition should be `j >= 0` to check all elements, including the first one
    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j]; // Shift elements to the right
      j--; // Move one position back in the sorted part
    }
    arr[j + 1] = element; // Insert the element in its correct position
  }
  return arr;
}

console.log(InsertioSort([7, 8, 4, 5, 1, 9, 10, 6]));
