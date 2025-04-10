// example 01
function doubleIt(number){
    let double = number * 2;
    console.log(double);
    console.log('input', number , 'output', double );
}
doubleIt(22);

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

doubleIt(44);

console.log('----------------');
console.log('----------------');
console.log('----------------');

let money = 1000;
doubleIt(money); // we can pass number/variable as argument



// example 02
function difference(num1, num2) {
     let subtraction = num1 - num2;
     console.log(subtraction);
     console.log(num1, num2, 'difference between age is: ', subtraction);
}

let fatherAge = 40;
let sonAge = 15;
difference(fatherAge, sonAge);

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

let motherAge = 35;
let daughterAge = 16;
difference(motherAge, daughterAge);