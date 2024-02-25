JavaScript provides numerous array methods for manipulating and working with arrays effectively. Here's an explanation of each method along with its syntax and examples:

1. **concat()**:
   - Combines two or more arrays into a new array.
   ```javascript
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const newArr = arr1.concat(arr2);
   console.log(newArr); // Output: [1, 2, 3, 4]
   ```

2. **join()**:
   - Joins all elements of an array into a string.
   ```javascript
   const arr = ['Hello', 'World'];
   const str = arr.join(' ');
   console.log(str); // Output: "Hello World"
   ```

3. **push()**:
   - Adds one or more elements to the end of an array and returns the new length of the array.
   ```javascript
   const arr = [1, 2];
   arr.push(3, 4);
   console.log(arr); // Output: [1, 2, 3, 4]
   ```

4. **pop()**:
   - Removes the last element from an array and returns that element.
   ```javascript
   const arr = [1, 2, 3];
   const removedElement = arr.pop();
   console.log(removedElement); // Output: 3
   ```

5. **shift()**:
   - Removes the first element from an array and returns that element.
   ```javascript
   const arr = [1, 2, 3];
   const removedElement = arr.shift();
   console.log(removedElement); // Output: 1
   ```

6. **unshift()**:
   - Adds one or more elements to the beginning of an array and returns the new length of the array.
   ```javascript
   const arr = [2, 3];
   arr.unshift(0, 1);
   console.log(arr); // Output: [0, 1, 2, 3]
   ```

7. **slice()**:
   - Extracts a section of an array and returns a new array.
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const slicedArr = arr.slice(1, 4);
   console.log(slicedArr); // Output: [2, 3, 4]
   ```

8. **splice()**:
   - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const removedElements = arr.splice(1, 3, 'a', 'b');
   console.log(arr); // Output: [1, 'a', 'b', 5]
   console.log(removedElements); // Output: [2, 3, 4]
   ```

9. **reverse()**:
   - Reverses the order of the elements in an array in place.
   ```javascript
   const arr = [1, 2, 3];
   arr.reverse();
   console.log(arr); // Output: [3, 2, 1]
   ```

10. **sort()**:
    - Sorts the elements of an array in place and returns the sorted array.
    ```javascript
    const arr = [3, 1, 2];
    arr.sort();
    console.log(arr); // Output: [1, 2, 3]
    ```

11. **indexOf()**:
    - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.indexOf(3)); // Output: 2
    ```

12. **lastIndexOf()**:
    - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
    ```javascript
    const arr = [1, 2, 3, 4, 3];
    console.log(arr.lastIndexOf(3)); // Output: 4
    ```

13. **forEach()**:
    - Calls a function for each element in the array.
    ```javascript
    const arr = [1, 2, 3];
    arr.forEach((element) => {
        console.log(element);
    });
    // Output:
    // 1
    // 2
    // 3
    ```

14. **map()**:
    - Creates a new array with the results of calling a provided function on every element in the calling array.
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.map((element) => element * 2);
    console.log(newArr); // Output: [2, 4, 6]
    ```

15. **filter()**:
    - Creates a new array with all elements that pass the test implemented by the provided function.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const filteredArr = arr.filter((element) => element % 2 === 0);
    console.log(filteredArr); // Output: [2, 4]
    ```

16. **reduce()**:
    - Executes a reducer function on each element of the array, resulting in a single output value.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // Output: 15
    ```

17. **every()**:
    - Tests whether all elements in the array pass the test implemented by the provided function.
    ```javascript
    const arr = [2, 4, 6];
    const allEven = arr.every((element) => element % 2 === 0);
    console.log(allEven); // Output: true
    ```

18. **some()**:
    - Tests whether at least one element in the array passes the test implemented by the provided function.
    ```javascript
    const arr = [1, 2, 3];
    const hasEven = arr.some((element) => element % 2 === 0);
    console.log(hasEven); // Output: true
    ```

19. **find()**:
    - Returns the value of the first element in the array that satisfies the provided testing function.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const found = arr.find((element) => element > 2);
    console.log(found); // Output: 3
    ```

20. **findIndex()**:
    - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const foundIndex = arr

.findIndex((element) => element > 2);
    console.log(foundIndex); // Output: 2
    ```

21. **includes()**:
    - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    ```javascript
    const arr = [1, 2, 3];
    const includesTwo = arr.includes(2);
    console.log(includesTwo); // Output: true
    ```

These are the essential array methods in JavaScript, each offering various functionalities for manipulation, iteration, and filtering of arrays.