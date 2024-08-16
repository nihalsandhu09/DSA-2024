// Q1. So The Pattern is like that
// *****
// *****
// *****
// *****

// Print this using For loop

// function printPattern(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }
// printPattern(4);

// Q2 . So The  Pattern looks like this
// *
// **
// ***
// ****
// *****

// function printPattern2(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//       str += " *";
//     }
//     console.log(str);
//   }
// }

// printPattern2(5);

// Q3 so the pattern is like That
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// function printPattern3(n) {
//   for (let i = 1; i < n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str = str + " " + j;
//     }
//     console.log(str);
//   }
// }
// printPattern3(6);

// Q4 - so thw patterns is like that

// 1
// 22
// 333
// 4444
// 55555

// function printPattern4(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str = str + " " + i;
//     }
//     console.log(str);
//   }
// }
// printPattern4(5);

// Q5 - so this is the patterns
// *****
// ****
// ***
// **
// *

// function printPattern5(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j < n - i + 1; j++) {
//       str = str + " *";
//     }
//     console.log(str);
//   }
// }
// printPattern5(5);

// Q6 So the next is this

// 12345
// 1234
// 123
// 12
// 1
// function printPattern6(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i + 1; j++) {
//       str = str + j + "";
//     }
//     console.log(str);
//   }
// }
// printPattern6(5);

// Q7 So this is The pattern

//    *
//   ***
//  *****
//  *******
// *********

// function printPattern7(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";

//     for (let j = 0; j < n - i - 1; j++) {
//       str = str + " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//       str += "*";
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//       str = str + " ";
//     }
//     console.log(str);
//   }
// }
// printPattern7(5);

// Q8 so this is the pattern
//     ********
//     *******
//     *****
//     ***
//     *

// function printPattern8(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     // space
//     for (let j = 0; j <= i; j++) {
//       str = str + " ";
//     }
//     // star
//     for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
//       str += "*";
//     }
//     // space
//     for (let j = 0; j <= i; j++) {
//       str = str + " ";
//     }
//     console.log(str);
//   }
// }
// printPattern8(5);

// Q9 so the pattern is ths

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// for what will do we will write two function for this
// function printPattern7(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";

//     for (let j = 0; j < n - i - 1; j++) {
//       str = str + " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//       str += "*";
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//       str = str + " ";
//     }
//     console.log(str);
//   }
// }
// printPattern7(5);
// function printPattern8(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     // space
//     for (let j = 0; j <= i; j++) {
//       str = str + " ";
//     }
//     // star
//     for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
//       str += "*";
//     }
//     // space
//     for (let j = 0; j <= i; j++) {
//       str = str + " ";
//     }
//     console.log(str);
//   }
// }
// printPattern7(5);
// printPattern8(5);
// // printPattern9(10);

// Q 10 so print this
// *
// **
// ***       n=5
// ****
// *****
// ****
// ***
// **
// *

// function printPattern10(n) {
//   for (let i = 1; i <= 2 * n - 1; i++) {
//     let star = i;
//     let stars = "";
//     if (i > n) star = 2 * n - i;
//     for (let j = 1; j <= star; j++) {
//       stars = stars + "*";
//     }
//     console.log(stars);
//   }
// }

// printPattern10(5);

// Q 11 so print this

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

// function printPattern11(n) {
//   let start = 1;
//   for (let i = 0; i < n; i++) {
//     let star = "";

//     if (i % 2 == 0) start = 1;
//     else start = 0;
//     for (let j = 0; j <= i; j++) {
//       star = star + start;
//       start = 1 - start;
//     }
//     console.log(star);
//   }
// }

// printPattern11(5);

// Q 12 priotn this pattern

// 1     1
// 12   21
// 123  321
// 12344321

function printPattern12(n) {
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
      stars = stars + j;
    }

    for (let j = 1; j <= space; j++) {
      stars = stars + " ";
    }

    for (let j = i; j >= 1; j--) {
      stars = stars + j;
    }

    console.log(stars);
    space = space - 2;
  }
}
// printPattern12(5);

// Q 13 print this series
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function printPattern13(n) {
  let num = 1;

  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars = stars + num + " ";
      num = num + 1;
    }
    console.log(stars);
  }
}
// printPattern13(5);

// Q 14 print this pattern
// A;
// AB;
// ABC;
// ABCD;
// ABCDE;

function printPattern14(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      let ch = String.fromCharCode(65 + j); // 65 is the ASCII value of 'A'
      str = str + ch + " ";
    }
    console.log(str);
  }
}
// printPattern14(5);

//  Q15 print this pattern
// ABCDE
// ABCD
// ABC
// AB
// A

function printPattern15(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j <= n - i - 1; j++) {
      let ch = String.fromCharCode(65 + j);
      str += ch + " ";
    }
    console.log(str);
  }
}
// printPattern15(5);

// Q16 pritn this Pattern
// A
// BB
// CCC
// DDDD
// EEEEE
function printPattern16(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j <= i; j++) {
      let ch = String.fromCharCode(65 + i);
      str += ch + " ";
    }

    console.log(str);
  }
}
// printPattern16(5);

// Q17 print this pattern
//         A
//       A B A
//     A B C B A
//   A B C D C B A
// A B C D E D C B A

function printPattern17(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    // First inner loop for leading spaces
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    // Second inner loop for characters (increasing and then decreasing)
    let breakpoint = (2 * i + 1) / 2;
    for (let j = 0; j < 2 * i + 1; j++) {
      let ch;
      if (j < breakpoint) {
        ch = String.fromCharCode(65 + j); // Increasing part
      } else {
        ch = String.fromCharCode(65 + (2 * i - j)); // Decreasing part
      }
      str += ch;
    }

    // Third inner loop for trailing spaces (optional)
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    // Print the resulting line
    console.log(str);
  }
}

// printPattern17(5);

// Q 18 print this pattern

// E
// D E
// C D E
// B D C E
// A B C D E

function printPattern18(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    // Calculate the starting character for the current row
    let startChar = 65 + (n - i - 1);

    // Loop to add characters in each row
    for (let j = startChar; j <= 65 + (n - 1); j++) {
      str += String.fromCharCode(j) + " ";
    }

    console.log(str.trim()); // Print the row and remove trailing space
  }
}

// printPattern18(5);

// Q 19 Print this Pattern
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
function printPattern19(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str = str + "*";
    }
    for (let j = 0; j < i; j++) {
      str = str + "  ";
    }
    for (let j = 1; j <= n - i; j++) {
      str = str + "*";
    }

    console.log(str);
  }
  let space = 8;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    for (let j = 0; j < space; j++) {
      str = str + " ";
    }
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    space = space - 2;
    console.log(str);
  }
}
// printPattern19(5);

// Q 20 print this pattern

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function printPattern20(n) {
  let space = 8;
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    for (let j = 0; j < space; j++) {
      str = str + " ";
    }
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    space = space - 2;
    console.log(str);
  }
  let space2 = 2;
  for (let i = 1; i < n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str = str + "*";
    }
    for (let j = 0; j < space2; j++) {
      str = str + " ";
    }
    for (let j = 1; j <= n - i; j++) {
      str = str + "*";
    }
    space2 = space2 + 2;
    console.log(str);
  }
}

printPattern20(5);
