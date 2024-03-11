// Creation of Promises 

// Method 1

const promise1= new Promise(function (resolve,reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(()=>{
    // resolve() - It does not matter if we write the resolve statement before or after log it will always be executed after the hello stmt
        console.log('hello');
        resolve() // Writing resolve here connect the promise with the .then method
    },1000)
})
// After creating the promise, we use the .then() method to specify what should happen once the promise is fulfilled (i.e., when it is resolved successfully).
promise1.then(function(){
    console.log('promise consumed');
})

// Method 2
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2');
        resolve();
    },1000)
}).then(()=>{
    console.log('resolved 2');
})

//Method 3 including parameter

const promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({'username':'ak','id':1}) // parameter which is an object
    },1000);
})

promise3.then((user)=>{
    console.log(typeof user);
})


// Method 4 reject method use and chaining concept
const promise4 = new Promise((resolve,reject)=>{
    let error = false;
    console.log('promise 4 async');
    if(!error){
        setTimeout(()=>{
            resolve({user:'akp',id:2});
        },1000)
    }
    else{
        reject('ERROR: Something went wrong');
    }
})
// Promise Chaining
promise4
.then((user)=>{
    console.log(user);
    return user.user;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("promise is either resolve or rejected");
});

// Method 5 using of async and await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// Async only work with a try/catch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Example of use cases

async function getUsers (){
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        // Using await here since converting the result which is of type object to JSON takes time
        console.log(data);
    } catch (error) {
        console.log('Error',error);
    }
}

getUsers();

// Same task as above but using then

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available
//Accepts an array of promises and returns a single promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.

// Promise.all([promise1, promise2, promise3])
//     .then((results) => console.log("All promises resolved:", results))
//     .catch((error) => console.error("One of the promises rejected:", error));