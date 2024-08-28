// So what is MAp
// A Map in javascript is a built in object that allows you to store key-value pairs where both the keys and the value can be of one be of any typw. It  is designed to be more flexible and efficient way to handle collection of keyed  data compared ti plain javaScript objects

// How to use Map

// create a map
const myMap = new Map();

// Add Key-value pairs to the map

myMap.set("a", 1);
myMap.set(2, "b");
myMap.set(true, "yes");
myMap.set({ name: "Nihal" }, "developer");

// Retriegve values
console.log(myMap);
console.log(myMap.get("a"));
console.log(myMap.get(2));
console.log(myMap.get(true));

// Check for the existence of the keys
// console.log(myMap.has("a"));
// console.log(myMap.has(3));

// // Get the sige of the Map
// console.log(myMap.size);

// // iterate ove the map
// myMap.forEach((value, key) => {
//   console.log(`${key} = ${value}`);
// });

// Hashing with inbuilt object map

function getOccurrence(array) {
  let hash = new Map();

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  return hash;
}

const array = [1, 2, 1, 4, 5, 7, 8, 9, 6, 1];
const elementscount = getOccurrence(array);
console.log(elementscount);

function getcharOccurrence(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let currentStr = str[i];
    currentStr = currentStr.toLowerCase();
    if (map.has(currentStr)) {
      map.set(currentStr, map.get(currentStr) + 1);
    } else {
      map.set(currentStr, 1);
    }
  }
  return map;
}

console.log(getOccurrence("abcdefghiabcd"));
