// JavaScript is a dynamically typed language.
// This means that the type of a variable is determined by the value assigned to it, and can change throughout the program.

// Stack (Primitive DataTypes) - Call By Value, It means a copy of the variable is created when it is called
// Heap (Non-Primitive DataTypes) - Call By Reference, It means a reference of the variable is returned when it is called

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
//Two Symbol calls create two distinct symbols, even though they have the same description '123'.
//Symbols are always unique, even if they have the same description.
//Therefore, id === anotherId returns false because each symbol is unique, regardless of the description passed to it

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// myFunction();

console.log(typeof anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3