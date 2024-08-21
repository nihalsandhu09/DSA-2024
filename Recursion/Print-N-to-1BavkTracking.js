// Print N to 1 using Back Tracking
// (i-1)  Not used

function f(i, n) {
  if (i > n) {
    return;
  }
  f(i + 1, n);
  console.log(i);
}
f(1, 3);
