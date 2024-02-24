JavaScript provides a variety of Date and Time methods to work with dates and times. Here's a comprehensive list of these methods along with their syntax and examples:

1. **new Date()**:
   - Creates a new Date object representing the current date and time.
   ```javascript
   const currentDate = new Date();
   console.log(currentDate); // Output: Current date and time
   ```

2. **new Date(milliseconds)**:
   - Creates a new Date object with the specified number of milliseconds since January 1, 1970, 00:00:00 UTC.
   ```javascript
   const someDate = new Date(1636576800000);
   console.log(someDate); // Output: Date representing the milliseconds
   ```

3. **new Date(dateString)**:
   - Creates a new Date object from a date string.
   ```javascript
   const someDate = new Date('2022-11-11T14:00:00');
   console.log(someDate); // Output: Date object representing the specified date and time
   ```

4. **new Date(year, monthIndex, day, hour, minutes, seconds, milliseconds)**:
   - Creates a new Date object with the specified components.
   ```javascript
   const someDate = new Date(2022, 10, 11, 14, 0, 0);
   console.log(someDate); // Output: Date object representing November 11, 2022, 14:00:00
   ```

5. **getDate()**:
   - Returns the day of the month (1-31) for the specified date.
   ```javascript
   const currentDate = new Date();
   console.log(currentDate.getDate()); // Output: Current day of the month
   ```

6. **getMonth()**:
   - Returns the month (0-11) for the specified date.
   ```javascript
   const currentDate = new Date();
   console.log(currentDate.getMonth()); // Output: Current month (0-11)
   ```

7. **getFullYear()**:
   - Returns the year (four digits) for the specified date.
   ```javascript
   const currentDate = new Date();
   console.log(currentDate.getFullYear()); // Output: Current year
   ```

8. **getHours()**:
   - Returns the hour (0-23) in the specified date according to local time.
   ```javascript
   const currentDate = new Date();
   console.log(currentDate.getHours()); // Output: Current hour (0-23)
   ```

9. **getMinutes()**:
   - Returns the minutes (0-59) in the specified date according to local time.
   ```javascript
   const currentDate = new Date();
   console.log(currentDate.getMinutes()); // Output: Current minutes (0-59)
   ```

10. **getSeconds()**:
    - Returns the seconds (0-59) in the specified date according to local time.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.getSeconds()); // Output: Current seconds (0-59)
    ```

11. **getMilliseconds()**:
    - Returns the milliseconds (0-999) in the specified date according to local time.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.getMilliseconds()); // Output: Current milliseconds (0-999)
    ```

12. **getTime()**:
    - Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.getTime()); // Output: Number of milliseconds since January 1, 1970
    ```

13. **getDay()**:
    - Returns the day of the week (0-6) for the specified date.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.getDay()); // Output: Current day of the week (0-6)
    ```

14. **toString()**:
    - Returns a string representing the specified Date object.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.toString()); // Output: String representation of the date
    ```

15. **toISOString()**:
    - Returns a string representing the date portion of the Date object in the ISO 8601 format.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.toISOString()); // Output: Date in ISO 8601 format
    ```

16. **toLocaleDateString()**:
    - Returns a string representing the date portion of the Date object formatted according to the locale.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.toLocaleDateString()); // Output: Date formatted according to the locale
    ```

17. **toLocaleTimeString()**:
    - Returns a string representing the time portion of the Date object formatted according to the locale.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.toLocaleTimeString()); // Output: Time formatted according to the locale
    ```

18. **toLocaleString()**:
    - Returns a string representing the Date object formatted according to the locale.
    ```javascript
    const currentDate = new Date();
    console.log(currentDate.toLocaleString()); // Output: Date and time formatted according to the locale
    ```

These are some of the commonly used Date and Time methods in JavaScript, each providing various functionalities for working with dates and times.