function f(i, factorial) {
  if (i === 1) {
    console.log(factorial);
    return;
  }
  f(i - 1, factorial * i);
}
f(5, 1);

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
let output = factorial(5);
console.log(output);
