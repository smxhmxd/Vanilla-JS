## DOM Methods and their Uses

Sure, here's a list of commonly used DOM methods along with their descriptions and examples:

1. **getElementById:**
   - Used to select an element based on its unique `id` attribute.
   - Example:
     ```html
     <div id="myDiv">Hello World</div>
     ```
     ```javascript
     const element = document.getElementById("myDiv");
     ```

2. **getElementsByClassName:**
   - Used to select elements based on their class name.
   - Example:
     ```html
     <p class="paragraph">Paragraph 1</p>
     <p class="paragraph">Paragraph 2</p>
     ```
     ```javascript
     const paragraphs = document.getElementsByClassName("paragraph");
     ```

3. **getElementsByTagName:**
   - Used to select elements based on their tag name.
   - Example:
     ```html
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>
     ```
     ```javascript
     const listItems = document.getElementsByTagName("li");
     ```

4. **querySelector:**
   - Used to select the first element that matches a specified CSS selector.
   - Example:
     ```html
     <div class="container">
       <p class="paragraph">Paragraph 1</p>
       <p class="paragraph">Paragraph 2</p>
     </div>
     ```
     ```javascript
     const paragraph = document.querySelector(".container .paragraph");
     ```

5. **querySelectorAll:**
   - Used to select all elements that match a specified CSS selector.
   - Example:
     ```html
     <div class="container">
       <p class="paragraph">Paragraph 1</p>
       <p class="paragraph">Paragraph 2</p>
     </div>
     ```
     ```javascript
     const paragraphs = document.querySelectorAll(".container .paragraph");
     ```
     Overall, querySelector is useful for selecting a single element based on a unique identifier or CSS selector, while querySelectorAll is useful for selecting multiple elements based on CSS selectors and performing operations on each of them.

6. **createElement:**
   - Used to create a new HTML element.
   - Example:
     ```javascript
     const newDiv = document.createElement("div");
     ```

7. **appendChild:**
   - Used to append a new child node to an element.
   - Example:
     ```html
     <div id="container"></div>
     ```
     ```javascript
     const container = document.getElementById("container");
     container.appendChild(newDiv);
     ```

8. **addEventListener:**
   - Used to attach an event listener to an element.
   - Example:
     ```html
     <button id="myButton">Click Me</button>
     ```
     ```javascript
     const button = document.getElementById("myButton");
     button.addEventListener("click", function() {
       alert("Button clicked!");
     });
     ```

9. **removeChild:**
   - Used to remove a child node from an element.
   - Example:
     ```html
     <div id="container">
       <p>Paragraph</p>
     </div>
     ```
     ```javascript
     const container = document.getElementById("container");
     const paragraph = container.querySelector("p");
     container.removeChild(paragraph);
     ```


1. **createElementNS:**
   - Used to create a new element with the specified namespace URI.
   - Example:
     ```javascript
     const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     ```

2. **insertBefore:**
   - Used to insert a new node before an existing child node of a specified parent node.
   - Example:
     ```html
     <ul id="myList">
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>
     ```
     ```javascript
     const newListElement = document.createElement("li");
     const list = document.getElementById("myList");
     const existingListItem = list.querySelector("li:first-child");
     list.insertBefore(newListElement, existingListItem);
     ```

3. **replaceChild:**
   - Used to replace an existing child node with a new node.
   - Example:
     ```html
     <div id="container">
       <p id="old">Old Paragraph</p>
     </div>
     ```
     ```javascript
     const newParagraph = document.createElement("p");
     newParagraph.textContent = "New Paragraph";
     const container = document.getElementById("container");
     const oldParagraph = document.getElementById("old");
     container.replaceChild(newParagraph, oldParagraph);
     ```

4. **getAttribute:**
   - Used to get the value of a specified attribute on the selected element.
   - Example:
     ```html
     <a href="https://www.example.com" id="link">Example Link</a>
     ```
     ```javascript
     const link = document.getElementById("link");
     const hrefValue = link.getAttribute("href");
     console.log(hrefValue); // Output: "https://www.example.com"
     ```

5. **setAttribute:**
   - Used to set the value of a specified attribute on the selected element.
   - Example:
     ```javascript
     const link = document.getElementById("link");
     link.setAttribute("href", "https://www.newurl.com");
     ```

6. **removeAttribute:**
   - Used to remove a specified attribute from the selected element.
   - Example:
     ```javascript
     const link = document.getElementById("link");
     link.removeAttribute("href");
     ```

7. **classList:**
   - Property that returns a live `DOMTokenList` of the classes for the element.
   - Allows manipulation of the class attributes of an element.
   - Example:
     ```html
     <div id="box" class="red"></div>
     ```
     ```javascript
     const box = document.getElementById("box");
     box.classList.add("blue");
     box.classList.remove("red");
     ```

8. **focus:**
   - Used to give focus to an element, such as an input field or a button.
   - Example:
     ```html
     <input type="text" id="myInput">
     ```
     ```javascript
     const input = document.getElementById("myInput");
     input.focus();
     ```

These methods provide additional functionality for manipulating the DOM, such as creating and modifying elements, working with attributes, and managing element classes and focus. They are essential for building dynamic and interactive web applications.

| DOM Methods        | Description                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------|
| `document.querySelector('.parent')` | Selects the first element that matches the specified CSS selector within the document. |
| `parent.children`                | Returns a live HTMLCollection of child elements of the specified parent element.             |
| `parent.children[1].innerHTML`   | Returns or sets the HTML content (including tags) of the specified element.                  |
| `parent.children[1].style.color = "orange"` | Sets the CSS style property `color` of the specified element.                            |
| `parent.firstElementChild`       | Returns the first child element of the specified parent element.                              |
| `parent.lastElementChild`        | Returns the last child element of the specified parent element.                               |
| `document.createElement('div')` | Creates a new HTML element with the specified tag name.                                        |
| `div.className = "main"`        | Sets or returns the value of the class attribute of the specified element.                     |
| `div.id = Math.round(Math.random() * 10 + 1)` | Sets or returns the value of the id attribute of the specified element.                     |
| `div.setAttribute("title", "generated title")` | Sets the value of an attribute on the specified element.                                  |
| `div.style.backgroundColor = "green"` | Sets the CSS style property `backgroundColor` of the specified element.                    |
| `div.style.padding = "12px"`     | Sets the CSS style property `padding` of the specified element.                                |
| `div.appendChild(addText)`       | Appends a new child node to the specified element.                                             |
| `document.body.appendChild(div)` | Appends a new child node to the document body.                                                 |
| `document.createElement('li')`  | Creates a new HTML `li` element.                                                               |
| `li.innerHTML = `${langName}``  | Sets or returns the HTML content (including tags) of the specified element.                   |
| `document.querySelector('.language').appendChild(li)` | Appends a new child node to the selected element.                                           |
| `li.appendChild(document.createTextNode(langName))` | Appends a new child node to the `li` element.                                                 |
| `secondLang.replaceWith(newli)`  | Replaces the specified element (`secondLang`) with a new one (`newli`).                        |
| `firstLang.outerHTML = '<li>TypeScript</li>'` | Sets or returns the HTML content (including tags) of the specified element and all its descendants. |
| `lastLang.remove()`              | Removes the specified element from the DOM.                                                   |