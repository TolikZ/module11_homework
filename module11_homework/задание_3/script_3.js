function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(9)(10));