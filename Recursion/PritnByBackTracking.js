// print 1 To  N using BackTracking
// we cant use +1 here

function f(i, n) {
  if (i < 1) {
    return;
  }
  f(i - 1, n);
  console.log(i);
}
f(3, 3);
