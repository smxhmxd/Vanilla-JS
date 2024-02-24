const score = 400
// console.log(score);

const balance = new Number(100)// convert the no. in balance to a number prototype
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));// output = 124

const other_number = 23.8966
console.log(other_number.toPrecision(3));// output = 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); output = 10,00,000

// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
// Math library

console.log(Math);
console.log(Math.abs(-0));
console.log(Math.round(6.4));
console.log(Math.ceil(7.1));
console.log(Math.floor((Math.random()*10+1)));//provides value between 0 and 1

let m=new Number(4); // it is an object
console.log(m);
const min=1;
const max=7;

console.log(typeof m);

console.log(Math.floor(Math.random()*(max-min))+1);