// how we write a promise

let promsie = new Promise((res, re) => {
  setTimeout(() => {
    res("this Promise is Resolved ");
  }, 1000);
});

promsie.then((value) => {
  console.log(value);
});


