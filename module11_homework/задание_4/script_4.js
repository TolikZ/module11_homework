function intervalNumber(a, b) {
  let i = setInterval(function () {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

intervalNumber(5, 15);