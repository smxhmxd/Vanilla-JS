// const tinderUser = new Object();// Singleton Object declared through constructor method
const tinderUser= {};// object literals does not create a singleton object

tinderUser.id="1234"
tinderUser.mail="1234@mail.com"
tinderUser.score="3.0"

 console.log(tinderUser);

const nexted_obj= {
    fullname:{
        first_name:"Hello",
        last_name:"World"
    }
}
// console.log(nexted_obj?.fullname.first_name);

// Concat two object

const obj1={
    name:'ak',
    class:2,
    id:4
}

const obj2={
    score:1,
    time:2,
    class:7
}
//method 1 which fails
// const obj3={obj1,obj2}; // will treat obj1 and obj2 as nexted values
// console.log(obj3);

//method 2 but not used during coding
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3); removes value with same keys

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const merged = Object.assign({}, target, source);
console.log(merged); // Output: { a: 1, b: 4, c: 5 }

//method 3 - Use Spread Operator ...

// const obj3={...obj1,...obj2,...nested_obj};
// console.log(obj3);


// more about object
// we get the value from Db as Array of Objects

const course1={
    courseName:"DBMS",
    courseId:"COC234",
    courseInstructor:"Bengali"
}
// How to access the value from Array of Objects
course1[0].courseName;
// Or we can iterate over it using a iterator
const {courseInstructor: instructor1} = course1;
console.log(instructor1);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring in Objects
const course = {
    course_name: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);// hitesh
console.log(instructor);// hitesh

// { JSON Structure
//     "name": "hitesh",
//     "course_name": "js in hindi",
//     "price": "free"
// }
