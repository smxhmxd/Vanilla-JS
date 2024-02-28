const mNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mNumbers.map( (num) => { return num + 10}) // add 10 to each number of the array

// Using chaining to apply multiple map and filter methods
const newNums = mNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);