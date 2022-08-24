const max = Math.max(40, 50, 999, 89);
// console.log(max);

const numbers = [12, 85, 999, 56];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

// const numbers2 = [numbers];
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

const number3 = [300, 800, ...numbers, 99, 59];
console.log(number3);