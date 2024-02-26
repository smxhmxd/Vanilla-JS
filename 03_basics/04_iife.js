// Immediately Invoked Function Expressions (IIFE)

// we use it to remove the global scope pollution sometime we need to run the function immediately without the pollution of the global scope so we use IIFE


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//()();
// The first brackets are used to contain the function
// The second bracket is used to immediately invoke the function

// Named IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
//hitesh given as an argument

