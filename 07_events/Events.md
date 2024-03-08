## addEventListener

`addEventListener` is a method in JavaScript used to attach an event listener to an HTML element. It allows you to specify a function (known as an event handler) that will be executed when a particular event occurs on the element, such as a mouse click, keypress, or form submission. This method provides a flexible way to handle user interactions and create dynamic web applications.

Here's the syntax for `addEventListener`:

```javascript
element.addEventListener(event, function, useCapture);
```

- `element`: The HTML element to which the event listener should be attached.
- `event`: A string representing the name of the event to listen for (e.g., "click", "mouseover", "keypress").
- `function`: The function to be executed when the specified event occurs.
- `useCapture` (optional): A Boolean value indicating whether to use event capturing (true) or event bubbling (false). Default is false.

```javascript
    Capturing traces the DOM from Parent to child or top to bottom
    Bubbling traces the DOM from Child to Parent or bottom to top

    When we click the owl image which is inside the ul tag using :-
    1. false(Bubbling) - owl clicked than clicked inside the ul(bottom to top)
    2. true(Capturing) - clicked inside the ul than owl clicked(top to bottom)

```

### Example:
```html
<button id="myButton">Click Me</button>
```

```javascript
const button = document.getElementById("myButton");

// Event listener for click event
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

In this example:
- We select the button element with the id `"myButton"`.
- We attach an event listener to the button for the `"click"` event.
- When the button is clicked, the function provided as the second argument (`function() {...}`) is executed, logging `"Button clicked!"` to the console.

### List of Methods Provided by `addEventListener`:

1. **click**: Fired when the element is clicked.
2. **mouseover**: Fired when the mouse pointer moves onto the element.
3. **mouseout**: Fired when the mouse pointer moves out of the element.
4. **keydown**: Fired when a key is pressed down.
5. **keyup**: Fired when a key is released.
6. **submit**: Fired when a form is submitted.
7. **focus**: Fired when the element receives focus.
8. **blur**: Fired when the element loses focus.
9. **change**: Fired when the value of the element changes (e.g., for input fields).
10. **load**: Fired when the element (such as an image or a document) has finished loading.
11. **DOMContentLoaded**: Fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
12. **resize**: Fired when the window is resized.
13. **scroll**: Fired when the document view or an element has been scrolled.
14. **touchstart**: Fired when a touch point is placed on the touch surface.
15. **touchend**: Fired when a touch point is removed from the touch surface.

These are just a few examples of events that can be listened for using `addEventListener`. There are many more events available, each representing a specific user action or browser state change.

**Certainly! Let's dive deeper into the `useCapture` parameter of the `addEventListener` method.**

### Event Flow: Capturing vs Bubbling

In the DOM event model, when an event occurs on an element, it doesn't just affect that element but can also affect its parent elements and ancestors, as well as its children and descendants. This event propagation happens in two phases: capturing and bubbling.

1. **Capturing Phase:**
   - In the capturing phase, the event starts from the root of the document (the `window` object) and travels down the DOM tree through the ancestors of the target element to the target element itself.
   - This phase is also known as the "capture" phase because the event is captured by the ancestors of the target element.
   - During this phase, event listeners attached with the `useCapture` flag set to `true` are triggered.

2. **Bubbling Phase:**
   - In the bubbling phase, the event starts from the target element and travels up the DOM tree through its ancestors.
   - This phase is also known as the "bubble" phase because the event bubbles up through the ancestors of the target element.
   - During this phase, event listeners attached without specifying the `useCapture` flag (or with `useCapture` set to `false`) are triggered.

### Example:

Let's consider an HTML structure with nested elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Flow</title>
</head>
<body>
    <div id="outer">
        <div id="middle">
            <div id="inner">Click Me!</div>
        </div>
    </div>
    <script>
        const outer = document.getElementById('outer');
        const middle = document.getElementById('middle');
        const inner = document.getElementById('inner');

        function handleClick(phase, event) {
            console.log(phase + ' phase - Event triggered by: ' + event.target.id);
        }

        outer.addEventListener('click', handleClick.bind(null, 'Bubbling'), false); // Bubbling phase
        outer.addEventListener('click', handleClick.bind(null, 'Capturing'), true); // Capturing phase
    </script>
</body>
</html>
```

### Explanation:

In this example:
- We have an HTML structure with three nested `div` elements: `outer`, `middle`, and `inner`.
- We attach event listeners for the `click` event on the `outer` element.
- One listener is attached with `useCapture` set to `false` (default), and the other is attached with `useCapture` set to `true`.

### Expected Output:

When you click on the innermost `div` with the text "Click Me!":
- The capturing phase listener (`handleClick` with `"Capturing"`) triggers first because of the `useCapture` flag set to `true`.
- Then, the bubbling phase listener (`handleClick` with `"Bubbling"`) triggers.

### Console Output:

```
Capturing phase - Event triggered by: inner
Bubbling phase - Event triggered by: inner
```

### Conclusion:

Understanding the capturing and bubbling phases and how to utilize the `useCapture` flag allows for precise control over event handling and propagation in the DOM, enabling developers to create more robust and efficient event-driven applications.

## Common Properties of Events

These properties are often accessible within event handler functions and provide information about the event that occurred. Here's a brief explanation of each:

1. **type**: A string representing the type of the event (e.g., "click", "keydown", "mouseover").

2. **timestamp**: A number representing the time at which the event occurred, measured in milliseconds since the Unix epoch.

3. **defaultPrevented**: A boolean indicating whether the default action of the event has been prevented using `event.preventDefault()`.

4. **target**: The element on which the event originally occurred (i.e., the target element).

5. **toElement**: Deprecated property. Used to refer to the element to which the mouse pointer was moved when the event was fired (for mouseover events).

6. **srcElement**: Deprecated property. An alias for `target`.

7. **currentTarget**: The element that is currently handling the event (i.e., the element to which the event listener is attached).

8. **clientX**: The horizontal coordinate of the mouse pointer relative to the viewport, when the event occurred.

9. **clientY**: The vertical coordinate of the mouse pointer relative to the viewport, when the event occurred.

10. **screenX**: The horizontal coordinate of the mouse pointer relative to the screen, when the event occurred.

11. **screenY**: The vertical coordinate of the mouse pointer relative to the screen, when the event occurred.

12. **altKey**: A boolean indicating whether the "Alt" key was pressed when the event occurred.

13. **ctrlKey**: A boolean indicating whether the "Ctrl" key was pressed when the event occurred.

14. **shiftKey**: A boolean indicating whether the "Shift" key was pressed when the event occurred.

15. **keyCode**: Deprecated property. Use `event.key` or `event.code` instead to get the key pressed during a keyboard event.

These properties provide valuable information about events in JavaScript and are commonly used in event handling code to implement various behaviors in web applications.

These are properties and attributes related to events in JavaScript. Let's go through each of them with explanations and examples:

1. **type**: Indicates the type of the event that occurred, such as "click", "mouseover", "keydown", etc.

```javascript
document.getElementById("myButton").addEventListener("click", function(event) {
    console.log(event.type); // Output: click
});
```

2. **timestamp**: Represents the time when the event occurred, measured in milliseconds since the Unix epoch (January 1, 1970).

```javascript
document.addEventListener("mousemove", function(event) {
    console.log(event.timestamp); // Output: 1644786420892
});
```

3. **defaultPrevented**: Indicates whether the default action of the event has been prevented by calling `event.preventDefault()`.

```javascript
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    console.log(event.defaultPrevented); // Output: true
});
```

4. **target**: Represents the element on which the event was originally dispatched.

```javascript
document.getElementById("myButton").addEventListener("click", function(event) {
    console.log(event.target); // Output: <button id="myButton">Click Me</button>
});
```

5. **toElement**: Deprecated. Previously used to represent the element the mouse pointer moved to (in a `mouseout` event), but replaced by `relatedTarget`.

6. **srcElement**: Deprecated. Previously used to represent the element that triggered the event (mostly in IE), but replaced by `target`.

7. **currentTarget**: Represents the element that is currently handling the event (the element to which the event handler is attached).

```javascript
document.getElementById("myButton").addEventListener("click", function(event) {
    console.log(event.currentTarget); // Output: <button id="myButton">Click Me</button>
});
```

8. **clientX**, **clientY**: Represents the horizontal and vertical coordinates of the mouse pointer relative to the viewport when the event occurred.

```javascript
document.addEventListener("mousemove", function(event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
});
```

9. **screenX**, **screenY**: Represents the horizontal and vertical coordinates of the mouse pointer relative to the screen when the event occurred.

```javascript
document.addEventListener("mousemove", function(event) {
    console.log(`X: ${event.screenX}, Y: ${event.screenY}`);
});
```

10. **altKey**, **ctrlKey**, **shiftKey**: Indicates whether the Alt, Ctrl, or Shift key was pressed when the event occurred.

```javascript
document.addEventListener("keydown", function(event) {
    if (event.altKey) {
        console.log("Alt key pressed");
    }
});
```

11. **keyCode**: Deprecated. Previously used to represent the Unicode value of a key pressed during a `keydown` or `keyup` event, but replaced by `key` or `code`.

These properties provide valuable information about events, allowing you to respond appropriately in event handlers based on user interactions.