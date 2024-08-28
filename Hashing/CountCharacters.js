// Normal brute force way

function countChar(char, str) {
  let count = 0;
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
let char = "l";
console.log(countChar(char, "hellocoders"));

// HAshing way

function useHashingToCountChar(char, arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let currentStr = arr[i];
    currentStr = currentStr.toLowerCase();
    if (hash[currentStr]) {
      hash[currentStr] += 1;
    } else {
      hash[currentStr] = 1;
    }
  }
  return hash[char.toLowerCase()] || 0;
}

let char1 = "apple";
let arr = ["apple", "bannna", "apple", "magos", "strawerry"];
let output = useHashingToCountChar(char1, arr);
console.log(output);

// in single time multiple queries
function hashingChar(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let currentStr = arr[i];
    if (hash[currentStr]) {
      hash[currentStr] += 1;
    } else {
      hash[currentStr] = 1;
    }
  }
  return hash;
}

function getCount(char, hash) {
  return hash[char] || 0;
}

const inputArray = ["a", "b", "a", "b", "c", "d"];
const hashmap = hashingChar(inputArray);
const queries = ["a", "b", "c"];

queries.map((query) => {
  console.log(
    `${query} appears ${getCount(query, hashmap)} times in the array.`
  );
});

//  If there is single string

function countOccurrenceonsingleString(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }
  return hash;
}

function coun(char, hash) {
  return hash[char] || 0;
}

let str = "abcbdeabc";
let hashMap = countOccurrenceonsingleString(str);
let queries2 = ["a", "b", "c"];
queries2.map((query) => {
  console.log(`${query} present  ${coun(query, hashMap)}`);
});
