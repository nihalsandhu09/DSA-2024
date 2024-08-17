// Print Name Using Recursion N Times

function f(i, n) {
  // Base Case

  if (i > n) {
    return;
  }
  console.log("Nihal");
  f(i + 1, n);
}
f(1, 4);
