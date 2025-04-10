// example 01
function doSquare(number){
    let squareFormula = number * number;
    console.log(squareFormula);

    console.log('value of the parameter is: ', number);
    console.log('result of the argument is: ', squareFormula);
}
doSquare(2);
doSquare(22);
doSquare(10);
doSquare(111);


// example 02
function simpleAdd(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}
simpleAdd(3, 5);
simpleAdd(373, 466);


// example 03
function multipleAdd(a, b, c, d, e) {
    let total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}
multipleAdd(1, 2, 3, 4, 5);
multipleAdd(1, 2, 3, 4); 
// if we don't pass a single argument , 
// then the single argument considered as undefined
// and give odd type result