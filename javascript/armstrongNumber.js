function isarmStrong(num) {
  let k = String(num).length;

  let sum = 0;
  let n = num;

  while (n > 0) {
    let ld = n % 10;

    sum = sum + Math.pow(ld, k);
    n = Math.floor(n / 10);
  }

  return sum === num ? true : false;
}

console.log(isarmStrong(153));
