function f(i, n) {
  if (i > n) {
    return;
  }

  console.log(i);
  f(i + 1, n);
}
f(1, 3);
