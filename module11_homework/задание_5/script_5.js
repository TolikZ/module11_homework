const degreeFunc = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("Введите натуральное число", '');
let n = prompt("Введите степень, в которую это число будет возведено", '');

if (n <= 1) {
  console.log('Степень ' + n + ' не поддерживается, введите целую степень, большую 1');
} else {
  console.log(degreeFunc(x, n));
}