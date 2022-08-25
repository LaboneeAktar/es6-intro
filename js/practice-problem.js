/*// ..........Problem 1...........

//1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const multiply = (x, y, z) => x * y * z;
const resutlt = multiply(3, 5, 2);
console.log(resutlt);

//2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani..

const myText = `I am a Web Developer.
I love to code.
I love to eat biriyani.`;
console.log(myText);

//3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const addNumber = (first, second = 5) => first + second;
const resutlt1 = addNumber(10);
console.log(resutlt1);
*/


//............. Problem 2...........

//Write an arrow function where it will do the following:
/*a) It will take an array where the array elements will be the 
name of your friends
b) Check if the length of each element is even, push elements 
with even length to a new array and return the result
Print the result. */

const friends = (friendsName) => {
    let evenNameFriends = [];
    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length % 2 == 0) {
            evenNameFriends.push(friendsName[i]);
        }
    }
    return evenNameFriends;

}
const friendsName = ['Tanjila', 'Ritu', 'Motu', 'Droho', 'Shafin', 'Marzia'];
const showFriendName = friends(friendsName);
console.log(showFriendName);


//....................Problem 3................................
/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.  */

const getSumOfSquareArray = numbers => {
    let sumOfSquareNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        const squareNumbers = numbers[i] * numbers[i];
        sumOfSquareNumbers = sumOfSquareNumbers + squareNumbers;
    }
    return sumOfSquareNumbers / 2;
}
const givenArray = [2, 3, 4, 8, 5];
const result = getSumOfSquareArray(givenArray);
console.log(result);

//..............Problem 4.......................
/*Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the 
result
Print the result.  */

const findMaximum = (array1, array2) => {
    const combineArray = [...array1, ...array2];
    const maximum = Math.max(...combineArray);
    return maximum;
}
const givenArray1 = [24, 455, 556, 766];
const givenArray2 = [1545, 255, 443, 48];
const showResult = findMaximum(givenArray1, givenArray2);
console.log(showResult);