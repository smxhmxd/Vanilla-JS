// there are two method to declare the object literal and constructor

// when we make object using constructor only then a singleton object is created

// object literals does not create a singleton object
const sym = Symbol("sdk");
// here obj is key value pair
const jsUser = {
    name: "Ahmad",
    "full name":"SMA",
    [sym]:"CNB", // use [] to declare a symbol
    enroll: "GK1416",
    fno: "20COB271",
    age:23,
    backlogs:[],
    cpi:8.72,
}

// to method to access the object

console.log(jsUser["full name"]);// "" are required to access the full name
console.log(jsUser.name);// full name cannot be accessed using . dot operator
console.log(jsUser[sym]);// [] are required to access the symbol - [Symbol(sdk)]: 'CNB'

// modify the value
jsUser.name = "Mew Two";
jsUser["full name"] ="PK";
console.log(jsUser);

jsUser.admitted = function admit(){
    console.log("You are admitted");
}

jsUser.admittedtwo = function admit(){
    console.log(`you are admitted,${this.name}`)// using backticks `` for string interpolation
}


jsUser.admitted() // You are admitted
jsUser.admittedtwo() // you are admitted,Mew Two

console.log(jsUser.admitted);// returna reference of the function - [Function: admit]
