/**
 * create a function that will return only even numbers
 * and return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    // console.log(numbers);
    const evens = [];
    for(let item of numbers){
        // console.log(item);
        if(item % 2 === 0) {
            console.log(item);
            evens.push(item);
            console.log('evens only list: ', evens);
        }
    }
    return evens;
}

const output = evenNumbersOnly([3, 5, 6, 8, 4, 9]);
console.log(output);

function evenNumbersSum(numbs){
    console.log(numbs);
    let evensSum = 0;
    for(let element of numbs){
        console.log(element);
        evensSum = evensSum + element;
        console.log('evensSum is: ', evensSum);
    }
    return evensSum;
}

const output2 = evenNumbersSum(output);
console.log(output2);