// print sium of N natural Number

// Parameterised way

function f(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  f(i - 1, sum + i);
}
// f(3, 0);

// Functional way

function f(n) {
  if (n === 0) {
    return 0;
  }
  return n + f(n - 1);
}
console.log(f(3));
