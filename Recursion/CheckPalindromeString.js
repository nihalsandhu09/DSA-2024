function checkPalindrome(i, str) {
  let n = str.length;
  if (i >= n / 2) return true;
  if (str[i] != str[n - i - 1]) return false;
  return checkPalindrome(i + 1, str);
}

let str = "MADAM";
const output = checkPalindrome(0, str);
console.log(output);
 