let score =33
// console.log(typeof score)

//suppose the score is in string.

score="33"
// now we want to convert this in the number format to save it in the db so we will 
// wrapper class
/* *Wrapper class for differet datatypes*
1:- number -> Number(pass value)
2:- string -> String(pass value)
3:- boolean -> Boolean(pass value) if value is =0 then false otherwise always treated as true
4:- bigInt -> BigInt(pass value)
*/

// Examples:- 

let valueInNumber = Number(score);
// return number as type

// now suppose score is 33a
score = "33a";
valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber) // gives NaN Not a number but return type is number
// In these type of cases we need to check both the return type and value

score = null; // type = object
valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber) // gives 0 but return type is number

score = undefined; // type = undefined
valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber) // gives NaN Not a number but return type is number
// In these type of cases we need to check both the return type and value

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

// **********************Operations***********************
// 1:- comparison operator
 /**
  * <, >, >=, <=, ==, !=
  * when we compare same datatype then okay no problem but it also allow us to compare
  * two different datatype which not a good practice
  * special cases with null value
  */

 console.log(null> 0); // false
 console.log(null === 0); //false
 console.log(null >= 0); // true


 // === strict check it check the datatypes also

//  The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else.
// That’s why (2) null == 0 is false.

// null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

// null == null; // true
// null == undefined; // true
// Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.
