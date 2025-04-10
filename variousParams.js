// problem 01: for a given string , 
// tell me if it has even numbers of string 
// or odd numbers of string

function evenSizedString(str){
    
    let stringSize = str.length;
    console.log(str, stringSize);

    if(stringSize % 2 === 0) {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
    
}
console.log(evenSizedString('dhaka'));
console.log(evenSizedString('faka'));
// NOTA BENE : if we don't declare return statement is function,
// it retuns automatically undefined


// problem02 : use boolean true or false as params
function doDoubleOrTriple(number, doDouble){
    if(doDouble === true) {
        let result = number * 2;
        return result;
    }
    else{
        let result = number * 3;
        return result;
    }
}
console.log(doDoubleOrTriple(5, true));
console.log(doDoubleOrTriple(7, false));


// problem 03 : use array elements as params
function numberOfArrayElements(myArray) {
    let arrayLength = myArray.length;
    // console.log(arrayLength);
    return arrayLength;
}
console.log(numberOfArrayElements([2, 4, 8, 7, 88, 99]));
console.log(numberOfArrayElements(['html', 'css', 'js']));