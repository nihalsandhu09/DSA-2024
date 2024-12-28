// How to  convert a number to binary

function ConvertNumInBinary(n) {
  let res = "";
  while (n > 0) {
    if (n % 2 == 1) res += "1";
    else res += "0";
    n = Math.floor(n / 2);
  }

  return res.split("").reverse().join(""); // Reverse the result;
}
const result = ConvertNumInBinary(18);
console.log(result);

// return a binary to integer

function convertToDecimal(binaryStr) {
  let decimal = 0;
  const len = binaryStr.length;

  // Loop through the binary string from right to left
  for (let i = len - 1; i >= 0; i--) {
    if (binaryStr[i] === "1") {
      decimal += Math.pow(2, len - 1 - i); // Add 2^(position) for each '1'
      console.log(decimal);
    }
  }

  return decimal;
}

// Test the function
const binaryStr = "10010"; // Binary representation of 10
const decimalNumber = convertToDecimal(binaryStr);
console.log(`Decimal representation of ${binaryStr} is ${decimalNumber}`);
