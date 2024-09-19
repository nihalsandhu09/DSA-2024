function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high) {
      i++;
    }
    while (arr[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
  return arr;
}
// const arr = [4, 6, 2, 5, 7, 9, 1, 3];
// const length = arr.length - 1;
// console.log(quickSort(arr, 0, length));

function partition2(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }
    while (arr[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
function quickSort(arr, low, high) {
  if (low < high) {
    const PIIndex = partition(arr, low, high);
    quickSort(arr, low, PIIndex - 1);
    quickSort(arr, PIIndex + 1, high);
  }
  return arr;
}
const arr = [4, 6, 2, 5, 7, 9, 1, 3];
const length = arr.length - 1;
console.log(quickSort(arr, 0, length));

function partitionHelper(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }
    while (j > pivot && j > low) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
function quickSort(arr, low, high) {
  if (low < high) {
    let PiIndex = partitionHelper(arr, low, high);
    quickSort(arr, low, PiIndex - 1);
    quickSort(arr, PiIndex + 1, high);
  }
}
