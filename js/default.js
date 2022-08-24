function add(first, second = 0) {
    const total = first + second;
    return total;
}
const resutlt = add(10);
console.log(resutlt);

function fullName(first, last = "Chowdhury") {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Aslam');
console.log(name);