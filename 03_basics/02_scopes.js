//var c = 300
//We do not use var because var is universally global scope
// Which means that any var variable can be used anywhere irrespective of the scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5))

function addOne(num)
{
    return num + 1
}



addTwo(5) // Gives error here since a variable function is declared
const addTwo = function(num)// Variable holding a function
{
    return num + 2
}
addTwo(5) // correct way to call addTwo
