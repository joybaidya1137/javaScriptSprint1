/* In JavaScript, a function is a reusable block of code designed to perform a specific task.
 Functions are executed when they are "called" or "invoked".
 They are a fundamental concept, allowing for code organization, reusability, and modularity.

The provided code demonstrates several ways to define and use functions, including:
*   **Function Declarations:** The standard way to define a function.
*   **Function Expressions:** Assigning a function to a variable.
*   **Arrow Functions:** A more concise syntax for function expressions.

*/






/*
1. Function Declaration:.......................................................................1. Function Declaration:...................
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
2. Function Expression:..................................................................................2. Function Expression......
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

        javascriptconst functionName = (parameters) => expression;

          If the function body is a single expression, it automatically returns 
          the result without needing the return keyword or curly braces.


2.Block Body (Explicit Return):

        javascriptconst functionName = (parameters) => {
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