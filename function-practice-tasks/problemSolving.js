// problem 01
function multiplyFour(n1, n2, n3, n4) {
  let multiplyResult = n1 * n2 * n3 * n4;
  return multiplyResult;
}
console.log(multiplyFour(2, 4, 6, 8));



// problem 02
function SupposeNum(num) {
  if (num % 2 === 1) {
    return num * 2;
  } else {
    return num / 2;
  }
}
console.log(SupposeNum(10));
console.log(SupposeNum(7));



// function 03
function makeAvg(numericalArray) {
  let elementSum = 0;
  for (let element of numericalArray) {
    console.log(element);
    elementSum = elementSum + element;
    console.log(elementSum);
  }
  let elementAvg = elementSum / numericalArray.length;
  return elementAvg;
}
console.log(makeAvg([2, 4, 6]));
console.log(makeAvg([1, 3, 5, 7, 8, 9, 6]));



// problem 04
function countZero(binaryString){
  let binaryZero = [];
  for(let item of binaryString){
    console.log(item);
    if(Number(item) === 0){
      console.log(item);
      binaryZero.push(item);
    }
  }
  return binaryZero;
  // return binaryZero.length;
}
console.log(countZero('1001001'));
console.log(countZero('1001'));



// problem 05
function oddEven(integerNum){
  console.log(integerNum);
  if(integerNum % 2 === 0) {
    return 'even';
  }
  else{
    return 'odd';
  }

}
console.log(oddEven(5));
console.log(oddEven(6));
