function CheckPalinfrome(n) {
  let reversed = 0;
  let dub = n;
  while (n > 0) {
    let ld = n % 10;
    n = Math.floor(n / 10);
    reversed = reversed * 10 + ld;
  }
  if (reversed === dub) {
    return true;
  } else {
    return false;
  }
}

console.log(CheckPalinfrome(2005));
