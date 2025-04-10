/** 
* OBJECTIVE : Write a function to give me, 
*             the sum of all numbers in an array 
*
*********************************************************
*
* step-1 : declare a function
* step-2 : check the function is called/invoked properly or not
* step-3 : set parameter(s) for the function
* step-4 : pass parameter(s) for the function
* step-5 : do the function tasks (step by step)
* 
*/

// method 01 : using incremental for loop
function sumOfArrayNumbers(paraArray) {
  let sum = 0;
  for (let i = 0; i < paraArray.length; i++) {
    // console.log(i);
    console.log(paraArray[i]);
    sum = sum + paraArray[i];
  }
  return sum;
}

const result = sumOfArrayNumbers([3, 4, 5, 7]);
const result2 = sumOfArrayNumbers([22, 44, 77, 88]);
console.log(result, result2);


// method 02 : using for --- of loop
function sumOfArrayElements(myArray){
    let mySum = 0
    for(let element of myArray){
        console.log(element);
        mySum = mySum + element;
        console.log(mySum);
    }
    return mySum;
}
console.log(sumOfArrayElements([333, 444, 555]));
const numbers = [33, 44, 55, 66];
console.log(sumOfArrayElements(numbers));
