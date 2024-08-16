function isPrime(n) {
  if (n < 2) {
    return `${n} is not prime number `;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return `${n} is Not  a Prime Number `;
    }
  }
  return `${n} is Prime Number `;
}
// console.log(isPrime(9));

// optimize

function isPrimewithSqu(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrimewithSqu(13));
