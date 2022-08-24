const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '00002333333',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone, color } = fish;
console.log(phone, color);


//........... Array Destructuring..............
const [first, another] = [44, 99, 55, 33];
console.log(first, another);


function getNames() {
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);