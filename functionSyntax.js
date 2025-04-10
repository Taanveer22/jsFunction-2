// example 01
function fanOff() {
    console.log('stand up');
    console.log('walk towards the fan switch');
    console.log('click the switch to off the fan');
}
fanOff();


// example 02
function brushTeeth() {
    console.log('pick up the toothbrush');
    console.log('pick up the toothpaste');
    console.log('open your mouth and clear the germs of your teeth');
}
brushTeeth();


// exmaple 03
// we give parameters when we declare the function
function fishCurry(fish, vegetables, masala) {
    console.log('hit the oil');
    console.log('mix up the ', masala);
    console.log('add the ', vegetables);
    console.log('fianlly add the', fish);

    return "delicious " + fish + " curry done";
}
const result = fishCurry('hilsha', 'sorisha', 'jira');
console.log(result);
// we give arguments when we call the funtion