// Basics apparoach to find how many times  anumber s present in an array

function f(num, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      count++;
    }
  }
  return count;
}

// let arr = [1, 2, 1, 1, 2];
// let num = 1;
// let output = f(num, arr);
// console.log(output);

// Hashings

function countNumberOccurrences(num, arr) {
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    let currentnum = arr[i];
    if (hashMap[currentnum]) {
      hashMap[currentnum] += 1;
    } else {
      hashMap[currentnum] = 1;
    }
  }
  return hashMap[num];
}
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const num = 1;
const occurrences = countNumberOccurrences(num, arr);
console.log(occurrences);

// with the separate queries

function countOccurrences(arr) {
  const hashMap = {};

  // Populate the hash map with the frequency of each number in the array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (hashMap[num]) {
      hashMap[num] += 1;
    } else {
      hashMap[num] = 1;
    }
  }

  return hashMap;
}
function getOccurrences(num, hashMap) {
  return hashMap[num] || 0;
}

const inputArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const hashMap = countOccurrences(inputArray);
const queries = [3, 4, 5]; // Example queries
queries.map((query) => {
  console.log(
    `${query} appears ${getOccurrences(query, hashMap)} times in the array.`
  );
});
