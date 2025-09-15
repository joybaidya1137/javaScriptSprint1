

/* In JavaScript, a function is a reusable block of code designed to perform a specific task.
 Functions are executed when they are "called" or "invoked".
 They are a fundamental concept, allowing for code organization, reusability, and modularity.

The provided code demonstrates several ways to define and use functions, including:
*   **Function Declarations:** The standard way to define a function.
*   **Function Expressions:** Assigning a function to a variable.
*   **Arrow Functions:** A more concise syntax for function expressions.

*/






/*
1. Function Declaration:...................................................................1. Function Declaration:...................
       1.A function declaration defines a named function using the function keyword.
       2.It’s hoisted, meaning you can call it before it’s defined in the code.maean: 

           // ✅ আগে কল করলেও কাজ করবে
                     sayHello();
                     function sayHello() {
                                 console.log("Hello from Declaration!");
                                }

                     // এখান থেকেও কল করা যাবে
                      sayHello();


Syntax:
function functionName(parameters) {
   // Code block
   return value;
   }

*/

function square(num) {
  return num * num;
}

// Test with different arguments
console.log(square(5));  // Output: 25
console.log(square(-3)); // Output: 9
console.log(square(0));  // Output: 0




/*
2. Function Expression:....................................................................2. Function Expression......
         1.A function expression assigns a function to a variable. 
         2.It’s not hoisted, so you must define it before calling it. 
         3.It can be named or anonymous.
Syntax:
const functionName = function(parameters) {
  // Code block
  return value;
};


2.It’s not hoisted, so you must define it before calling it. means:

// ❌ আগে কল করলে কাজ করবে না
greet();  

// Function Expression
const greet = function() {
    console.log("Hello from Expression!");
};

// ✅ এখানে থেকে কল করলে কাজ করবে
greet();


*/
const factorial = function(num) {
  if (num < 0) return -1; // Handle negative numbers
  if (num === 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Test with different arguments
console.log(factorial(5));  // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0));  // Output: 1
console.log(factorial(-1)); // Output: -1




// 3.👉 Arrow Function.....................................................................👉 Arrow Function.............................
/*👉 Arrow Function হলো ফাংশন লেখার ছোট ও সহজ পদ্ধতি,
 যেটা => দিয়ে লেখা হয় আর আলাদা করে নাম দেওয়া হয় না।

উদাহরণ:

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8

*/



/*
Syntax:
Arrow functions have two main forms:

1.Single Expression (Implicit Return):  

        const functionName = (parameters) => expression;

          If the function body is a single expression, it automatically returns 
          the result without needing the return keyword or curly braces.


2.Block Body (Explicit Return):

        const functionName = (parameters) => {
           // Code block
            return value;
        };

If you use curly braces {} for a multi-line block, you must explicitly use return to return a value.

 */






/* 
  1.Single Expression (Implicit Return): 
  Example 1: Calculate the Cube of a Number
  */

 const cube = (num) => num ** 3;

// Test with different arguments
console.log(cube(2));   // Output: 8
console.log(cube(-3));  // Output: -27
console.log(cube(0));   // Output: 0



// Another example2:
const greet = (name) => `Hello, ${name}!`;

// Test with different arguments
console.log(greet("Alice"));    // Output: "Hello, Alice!"
console.log(greet("Bob"));      // Output: "Hello, Bob!"
console.log(greet(""));         // Output: "Hello, !"
console.log(greet(123));        // Output: "Hello, 123!"

// Another example:
const getLength = (str) => str.length;

// Test with different arguments
console.log(getLength("hello"));  // Output: 5 (number)
console.log(getLength(""));       // Output: 0 (number)
console.log(getLength("js"));     // Output: 2 (number)



// Another example returning boolean:
const isAdult = (age) => age >= 18;

// Test with different arguments
console.log(isAdult(20));    // Output: true (boolean)
console.log(isAdult(16));    // Output: false (boolean)
console.log(isAdult(18));    // Output: true (boolean)



// Another example returning Object :
const createPerson = (name, age) => ({ name, age });

// Test with different arguments
console.log(createPerson("Alice", 25)); // Output: { name: "Alice", age: 25 } (object)
console.log(createPerson("Bob", 17));   // Output: { name: "Bob", age: 17 } (object)
console.log(createPerson("", 0));       // Output: { name: "", age: 0 } (object)


// Another example Returning an Array (a Type of Object) :
const getEvens = (numbers) => numbers.filter(num => num % 2 === 0);

// Test with different arguments
console.log(getEvens([1, 2, 3, 4])); // Output: [2, 4] (array)
console.log(getEvens([1, 3, 5]));     // Output: [] (array)
console.log(getEvens([2, 4, 6]));     // Output: [2, 4, 6] (array)



// Another example Returning a Function

const createMultiplier = (factor) => (num) => num * factor;

// Test with different arguments
const double = createMultiplier(2);
console.log(double(5));  // Output: 10 (number)
console.log(double(3));  // Output: 6 (number)

const triple = createMultiplier(3);
console.log(triple(5));  // Output: 15 (number)






/*
2.Block Body (Explicit Return):

Example 2: Check if a Number is Even
*/

 isEven = (num) => {
  return num % 2 === 0;
};

// Test with different arguments
console.log(isEven(4));   // Output: true
console.log(isEven(7));   // Output: false
console.log(isEven(-2));  // Output: true

// Another example:

const circleArea = (radius) => {
    return Math.PI * radius ** 2;
};

// Test
console.log(circleArea(5).toFixed(2));   // "78.54"
console.log(circleArea(0).toFixed(2));   // "0.00"
console.log(circleArea(2.5).toFixed(2));// "19.63"


/*
............................................................. Self-Invoking Functions...................................

4. Self-Invoking Functions (Immediately Invoked Function Expressions - IIFE)
  - A self-invoking function runs automatically as soon as it is defined.
  - Useful for creating a local scope and avoiding polluting the global namespace.

Syntax:
(function() {
  // Code block
})();

Or with arrow function:
(() => {
  // Code block
})();

*/

// Example: IIFE that prints a message
(function() {
  console.log("Hello from a self-invoking function!");
})();

// Example: IIFE with parameters
(function(name) {
  console.log(`Hello, ${name}!`);
})("Self-Invoked");

// Example: IIFE that returns a value
const result = (function(num) {
  return num * num;
})(6);

console.log(result); // Output: 36

// Example: Arrow function IIFE
const sum = ((a, b) => a + b)(4, 5);
console.log(sum); // Output: 9


/*
5. The 'this' Keyword in Functions
-----------------------------------
In JavaScript, 'this' refers to the object that is executing the current function.
Its value depends on how the function is called.

Example 1: 'this' in a method (object function)
*/
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Output: Hello, my name is Alice

/*
Example 2: 'this' in a regular function (not attached to an object)
*/
function showThis() {
  console.log(this);
}
showThis(); // In non-strict mode, 'this' refers to the global object (window in browsers)

/*
Example 3: 'this' in arrow functions
Arrow functions do NOT have their own 'this'; they inherit 'this' from their surrounding scope.
*/
const obj = {
  value: 42,
  show: () => {
    console.log(this.value);
  }
};
obj.show(); // Output: undefined (arrow function does not bind its own 'this')

/*
Example 4: 'this' in event handlers (browser only)
*/
// document.getElementById("myBtn").onclick = function() {
//   console.log(this); // 'this' refers to the button element
// };

/*
Summary:
- In object methods, 'this' refers to the object.
- In regular functions, 'this' refers to the global object (or undefined in strict mode).
- In arrow functions, 'this' is inherited from the parent scope.
*/




