const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //without this keyword gives error.
        // This keyword is use to refer to the variables in the current context
        console.log(this);// it will all the elements of the current context i.e. username,price,welcomeMessage
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()
// this keyword cannot be used ina function. It can only be used in an object

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// Declaration of arrow function

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai()

// ++++++++++++++++ Arrow Functions ++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // Implicit Return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
// to return an object we have to wrap the function body in parenthesis


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(() => {})
