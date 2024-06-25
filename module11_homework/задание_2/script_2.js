let myNum = Number(prompt("Введите простое или непростое число, но не больше 1000"));

function getSimpleNum() {
  if (myNum <= 1 || myNum > 1000) {
    return console.log("Данные неверны");
  }
  for (let i = 2; i < myNum; i++) {
    if (myNum % i === 0) {
      return console.log("Число непростое");
    }
  }
  return console.log("Число простое");
}

getSimpleNum(myNum);