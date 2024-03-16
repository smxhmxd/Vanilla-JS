# Prototype in JavaScript

**Prototypes are the mechanism by which JavaScript objects inherit features from one another(the prototype is an internal property of objects that is used for inheritance).**

## [The prototype chain](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain)

In the browser's console, try creating an object literal:

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

This is an object with one data property, `city`, and one method, `greet()`. If you type the object's name _followed by a period_ into the console, like `myObject.`, then the console will pop up a list of all the properties available to this object. You'll see that as well as `city` and `greet`, there are lots of other properties!

```js
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

Try accessing one of them:

```js
myObject.toString(); // "[object Object]"
```

It works (even if it's not obvious what `toString()` does).

What are these extra properties, and where do they come from?

Every object in JavaScript has a built-in property, which is called its **prototype**. The prototype is itself an object, so the prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype that has `null` for its own prototype.

**Note:** The property of an object that points to its prototype is **not** called `prototype`. Its name is not standard, but in practice all browsers use [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). The standard way to access an object's prototype is the [`Object.getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) method.

When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case `undefined` is returned.

So when we call `myObject.toString()`, the browser:

- looks for `toString` in `myObject`
- can't find it there, so looks in the prototype object of `myObject` for `toString`
- finds it there, and calls it.

What is the prototype for `myObject`? To find out, we can use the function `Object.getPrototypeOf()` or  `__proto__`:

```js
Object.getPrototypeOf(myObject); // Object { }
// OR
myObject.__proto__ // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
```

This is an object called `Object.prototype`, and it is the most basic prototype, that all objects have by default. The prototype of `Object.prototype` is `null`, so it's at the end of the prototype chain:

![Prototype chain for myObject](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes/myobject-prototype-chain.svg)

The prototype of an object is not always `Object.prototype`. Try this:

```js
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
```

This code creates a `Date` object, then walks up the prototype chain, logging the prototypes. It shows us that the prototype of `myDate` is a `Date.prototype` object, and the prototype of _that_ is `Object.prototype`.

![Prototype chain for myDate](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes/mydate-prototype-chain.svg)

In fact, when you call familiar methods, like `myDate2.getMonth()`, you are calling a method that's defined on `Date.prototype`.

## [Shadowing properties](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#shadowing_properties)

What happens if you define a property in an object, when a property with the same name is defined in the object's prototype? Let's see:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'
```

This should be predictable, given the description of the prototype chain. When we call `getYear()` the browser first looks in `myDate` for a property with that name, and only checks the prototype if `myDate` does not define it. So when we add `getYear()` to `myDate`, then the version in `myDate` is called.

This is called "shadowing" the property.

## [Setting a prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#setting_a_prototype)

There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: `Object.create()` and constructors.

### [Using Object.create](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#using_object.create)

The `Object.create()` method creates a new object and allows you to specify an object that will be used as the new object's prototype.

Here's an example:

```js
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

Here we create an object `personPrototype`, which has a `greet()` method. We then use `Object.create()` to create a new object with `personPrototype` as its prototype. Now we can call `greet()` on the new object, and the prototype provides its implementation.

### [Using a constructor](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#using_a_constructor)

In JavaScript, all functions have a property named `prototype`. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named `__proto__`).

So if we set the `prototype` of a constructor, we can ensure that all objects created with that constructor are given that prototype:

```js
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
```

Here we create:

- an object `personPrototype`, which has a `greet()` method
- a `Person()` constructor function which initializes the name of the person to create.

We then put the methods defined in `personPrototype` onto the `Person` function's `prototype` property using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

After this code, objects created using `Person()` will get `Person.prototype` as their prototype, which automatically contains the `greet` method.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

This also explains why we said earlier that the prototype of `myDate` is called `Date.prototype`: it's the `prototype` property of the `Date` constructor.

### [Own properties](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#own_properties)

The objects we create using the `Person` constructor above have two properties:

- a `name` property, which is set in the constructor, so it appears directly on `Person` objects
- a `greet()` method, which is set in the prototype.

It's common to see this pattern, in which methods are defined on the prototype, but data properties are defined in the constructor. That's because methods are usually the same for every object we create, while we often want each object to have its own value for its data properties (just as here where every person has a different name).

Properties that are defined directly in the object, like `name` here, are called **own properties**, and you can check whether a property is an own property using the static [`Object.hasOwn()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) method:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

**Note:** You can also use the non-static [`Object.hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) method here, but we recommend that you use `Object.hasOwn()` if you can.

## [Prototypes and inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#prototypes_and_inheritance)

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.

In particular they support a version of **inheritance**. Inheritance is a feature of object-oriented programming languages that lets programmers express the idea that some objects in a system are more specialized versions of other objects.

For example, if we're modeling a school, we might have _professors_ and _students_: they are both _people_, so have some features in common (for example, they both have names), but each might add extra features (for example, professors have a subject that they teach), or might implement the same feature in different ways. In an OOP system we might say that professors and students both **inherit from** people.

You can see how in JavaScript, if `Professor` and `Student` objects can have `Person` prototypes, then they can inherit the common properties, while adding and redefining those properties which need to differ.


# New Keyword in JavaScript
In JavaScript, the `new` keyword is used primarily for creating instances of objects from constructor functions. When used with a constructor function, `new` creates a new object and sets the constructor's prototype object as the prototype of the newly created object. It also binds the `this` keyword in the constructor function to the newly created object. Here are its use cases with examples:

<font color=Purple>If we do not use the new keyword in the first example the value ('John', 30) will be overwritten when ('Alice', 25) is called. Declaring them using `new` create a new instance of these objects.</font>

### 1. Creating Instances of Objects:

```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating instances using new
const person1 = new Person('John', 30);
const person2 = new Person('Alice', 25);

console.log(person1); // { name: 'John', age: 30 }
console.log(person2); // { name: 'Alice', age: 25 }
```

### 2. Creating Custom Objects:

```javascript
// Custom object with properties and methods
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.drive = function() {
        console.log(`Driving ${this.make} ${this.model}`);
    };
}

// Creating instances using new
const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');

car1.drive(); // Driving Toyota Corolla
car2.drive(); // Driving Honda Civic
```

### 3. Inheritance:

```javascript
// Parent class
function Animal(name) {
    this.name = name;
}

// Child class inheriting from Animal
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor with this context
    this.breed = breed;
}

const dog = new Dog('Buddy', 'Labrador');
console.log(dog); // { name: 'Buddy', breed: 'Labrador' }
```

### 4. Creating Objects from Built-in Constructors:

```javascript
const date = new Date(); // Creating Date object
const regex = new RegExp('\\w+'); // Creating RegExp object
```

### 5. Creating Objects with Prototypes:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to Person prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person = new Person('John', 30);
person.sayHello(); // Hello, my name is John
```

### 6. Creating Objects with Object Literals:

```javascript
const obj = new Object(); // Equivalent to {}
obj.foo = 'bar';

console.log(obj); // { foo: 'bar' }
```

### Note:
- The `new` keyword should be used with constructor functions to avoid unexpected behavior when used with regular functions.
- It is not necessary to explicitly return a value from the constructor function; the `this` object is returned automatically when using `new`.