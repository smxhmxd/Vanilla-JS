JavaScript provides several methods for working with objects, allowing you to manipulate, iterate over, and retrieve information from objects. Here's a comprehensive list of object methods along with their syntax and examples:

1. **Object.assign(target, ...sources)**:
   - Copies the values of all enumerable own properties from one or more source objects to a target object.
   ```javascript
   const target = { a: 1, b: 2 };
   const source = { b: 4, c: 5 };
   const merged = Object.assign({}, target, source);
   console.log(merged); // Output: { a: 1, b: 4, c: 5 }
   ```

2. **Object.keys(obj)**:
   - Returns an array of a given object's own enumerable property names.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const keys = Object.keys(obj);
   console.log(keys); // Output: ['a', 'b', 'c']
   ```

3. **Object.values(obj)**:
   - Returns an array of a given object's own enumerable property values.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const values = Object.values(obj);
   console.log(values); // Output: [1, 2, 3]
   ```

4. **Object.entries(obj)**:
   - Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const entries = Object.entries(obj);
   console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]
   ```

5. **Object.getOwnPropertyNames(obj)**:
   - Returns an array of all own property names of a given object.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const propertyNames = Object.getOwnPropertyNames(obj);
   console.log(propertyNames); // Output: ['a', 'b', 'c']
   ```

6. **Object.getOwnPropertyDescriptor(obj, prop)**:
   - Returns a property descriptor for a named property on an object.
   ```javascript
   const obj = { a: 1 };
   const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
   console.log(descriptor); // Output: { value: 1, writable: true, enumerable: true, configurable: true }
   ```

7. **Object.defineProperty(obj, prop, descriptor)**:
   - Adds the named property described by a given descriptor to an object.
   ```javascript
   const obj = {};
   Object.defineProperty(obj, 'a', {
       value: 1,
       writable: true,
       enumerable: true,
       configurable: true
   });
   console.log(obj); // Output: { a: 1 }
   ```

8. **Object.defineProperties(obj, props)**:
   - Adds the named properties described by the given descriptors to an object.
   ```javascript
   const obj = {};
   Object.defineProperties(obj, {
       a: { value: 1, writable: true },
       b: { value: 2, writable: false }
   });
   console.log(obj); // Output: { a: 1, b: 2 }
   ```

9. **Object.getOwnPropertyDescriptor(obj, prop)**:
   - Returns a property descriptor for a named property on an object.
   ```javascript
   const obj = { a: 1 };
   const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
   console.log(descriptor); // Output: { value: 1, writable: true, enumerable: true, configurable: true }
   ```

10. **Object.seal(obj)**:
    - Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
    ```javascript
    const obj = { a: 1 };
    Object.seal(obj);
    obj.b = 2; // Attempted addition of new property will be ignored in strict mode
    console.log(obj); // Output: { a: 1 }
    ```

11. **Object.freeze(obj)**:
    - Freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties, or their enumerability, configurability, or writability, from being changed.
    ```javascript
    const obj = { a: 1 };
    Object.freeze(obj);
    obj.b = 2; // Attempted addition of new property will be ignored in strict mode
    console.log(obj); // Output: { a: 1 }
    ```

12. **Object.is(obj1, obj2)**:
    - Determines whether two values are the same value.
    ```javascript
    console.log(Object.is(1, 1)); // Output: true
    console.log(Object.is({}, {})); // Output: false (objects are not the same instance)
    ```

13. **Object.fromEntries(iterable)**:
    - Transform a list of key-value pairs into an object.
    ```javascript
    const entries = [['a', 1], ['b', 2]];
    const obj = Object.fromEntries(entries);
    console.log(obj); // Output: { a: 1, b: 2 }
    ```

14. **Object.keys(obj)**:
    - Returns an array of a given object's own enumerable property names.
    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);
    console.log(keys); // Output: ['a', 'b', 'c']
    ```

15. **Object.values(obj)**:
    - Returns an array of a given object's own enumerable property values.
    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    const values = Object.values(obj);
    console.log(values); // Output: [1, 2, 3]
    ```

16. **Object.entries(obj)**:
    - Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    const entries = Object.entries(obj);
    console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]
    ```

These methods provide various functionalities for working with objects in JavaScript, including copying, iterating, and retrieving information about object properties.