//Function Declaration
/*
function add(first, second) {
    const total = first + second;
    return total;
}
const resutlt = add(10, 20);
console.log(resutlt);
*/

//Function Expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
const resutlt1 = add1(20, 20);
console.log(resutlt1);

//Function Expression with anonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}
const resutlt2 = add2(30, 20);
console.log(resutlt2);


//
function add4(first, second) {
    return first + second;
}


// arrow function
const add5 = (first, second) => first + second;
const resutlt = add2(30, 320);
console.log(resutlt);

const fullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

//No parameter arrow function
const getPie = () => 3.1416;

// One parameter
const doubleIt = (num) => num * 2;

//one parameter simple version
const fiveTimes = num => num * 5;

//Multi Line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplySum = firstSum * secondSum;
    const resutlt = multiplySum / 2;
    return resutlt;
}
const showResutlt = doMath(40, 20, 30);
console.log(showResutlt);
