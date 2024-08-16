function getPrimeNumbers(limit) {
  const primes = [];
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(n);
    }
  }
  return primes;
}

const PrimeNumbers = getPrimeNumbers(100);
console.log(PrimeNumbers);
