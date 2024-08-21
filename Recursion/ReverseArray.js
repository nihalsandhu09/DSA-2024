// Reverse a array using recursion
// how we normally reversed an array There are multiple ways one is to loop  thruhg n-1 to 0th index and the other one is to use Two pointer approach

function TwoPointers(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log(TwoPointers([1, 2, 4, 5, 6]));

function reverseArray(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return arr;

  [arr[l], arr[r]] = [arr[r], arr[l]];

  return reverseArray(arr, l + 1, r - 1);
}
let array = [1, 2, 4, 5, 6, 7];
console.log(reverseArray(array));
