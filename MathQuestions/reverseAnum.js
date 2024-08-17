function reverseNum(n) {
  let reversed = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);
    reversed = reversed * 10 + lastDigit;
  }
  return reversed;
}

console.log(reverseNum(8585));
