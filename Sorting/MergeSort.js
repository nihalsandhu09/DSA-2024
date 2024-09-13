function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergteSort(arr, low, high) {
  if (low == high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);
  mergteSort(arr, low, mid);
  mergteSort(arr, mid + 1, high);

  merge(arr, low, mid, high);
}
let array = [7, 8, 9, 4, 8, 5, 6, 1, 2, 4];
mergteSort(array, 0, array.length - 1);
console.log(array);
