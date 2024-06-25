function getEvenOdd() {
  let myArray = [1, 2, 3, 4, 7, 100, 0, null, 0, "zero"];

  let evenNum = 0;
  let oddNum = 0;
  let otherItem = 0;

  for (let i = 0; i < myArray.length; i++) {
    if ((myArray[i] === 0) || (typeof (myArray[i]) != 'number')) {
      otherItem++;
    } else {
      if (myArray[i] % 2 === 0) {
        evenNum++;
      } else {
        oddNum++;
      }
    }
  }

  console.log("Четные: " + evenNum);
  console.log("Нечетные: " + oddNum);
  console.log("Другие: " + otherItem);
}

getEvenOdd();