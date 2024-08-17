// function f() {
//   console.log(1);
//   f();
// }
// f();

// with Base condition
let count = 0;
function f() {
  if (count === 4) return;
  console.log(count);
  count++;
  f();
}
f();
