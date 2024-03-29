for (let index = 1; index <=10; index++) {
   // const element = array[index];
    console.log(index);
}


// *********ARRAY SPECIFIC LOOPS************

// for of
//[{},{},{}] arr of objects
const arr=[1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const str="hello world"
for(const num of str)
console.log(num);


// MAPS

const map = new Map() //holds key-value pairs remember the original insertion of the key unique value

map.set('IN',"INDIA");
map.set('USA',"United State of America")
console.log(map); //Map(2) { 'IN' => 'INDIA', 'USA' => 'United State of America' }
for(const [key , value] of map){
    console.log(key);
}

// for of loop does not work on the objects

// for in loop for objects
const obj ={
    val1:"1",
    val2:2,
    val3:"kka"
}
for (const key in obj) {
    console.log(key);// val1, val2, val3
    console.log(obj[key]);//1 , 2, kka
}
// for in loop for arrays
const coding = ["js", "ruby", "java", "python", "cpp"]

for (const key in coding) {
    console.log(key);// 0,1,2,3,4
    console.log(coding[key]);// js,ruby,java,python,cpp
}


// for each loop

const codings = ["js", "ruby", "java", "python", "cpp"]

// codings.forEach( function (val){
//     console.log(val);
// } )

// codings.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// codings.forEach(printMe)

// codings.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// Iterations over array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
} )

// maps
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }



// filter
// const codings = ["js", "ruby", "java", "python", "cpp"]


// const values = codings.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values); // undefined - the forEach loop does not return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { // once the scope '{' is opened the return keyword should be used
//     return num > 4
// } ) // 5,6,7,8,9

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// myNums.map((index)=>{
//     console.log('map: ',index);
// })


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')// Books with genre history are returned

  userBooks = books.filter( (bk) => { //since a scope was opened '{' return should be used to display result
    return bk.publish >= 1995 && bk.genre === "History"// Books with genre history and published on or after 1995 are returned
})
  console.log(userBooks);

