// JavaScript arrays can hold elements of different data types in the same array.


/* 
 1.Array → [] .................................................................array.......................................
       let numbers = [10, 20, 30, 40, 50];
       console.log("Original array:", numbers);

       const mixedArray = [
    10,                      // Number
    "Hello World",           // String
    true,                    // Boolean
    null,                    // Null value
    undefined,               // Undefined value
    { name: "John", age: 30 }, // Object
    [1, 2, 3],               // Another array
    function() { console.log("Function inside array"); }   // Function
];

   // To see the full array in the console
   console.log(mixedArray);

   // Accessing an element by its index
console.log(mixedArray[1]); // Outputs: "Hello World"

// Accessing an element from the nested object
console.log(mixedArray[5].name); // Outputs: "John"

// Executing the function from the array
mixedArray[7](); // Outputs: "Function inside array"
 
    
2.Object → { key: value }  .........................................................................Object,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// Object example:
         const person =  {
             name: "John",
             age: 25,
             isStudent: false,
             hobbies: ["Reading", "Traveling", "Swimming"],  // Array as a property
             address: {    // Nested object as a property   
                 street: "123 Main St",
                 city: "Anytown",
                 country: "USA",
                 number: 1234567890
               }
             };


console.log("Person Object:", person);
console.log("Name:", person.name); // Accessing property using dot notation
console.log("Age:", person["age"]); // Accessing property using bracket notation
console.log("Is Student:", person.isStudent); // Accessing boolean property
console.log("Address:", person.address); // Accessing nested object property
console.log("Hobbies:", person.hobbies); // Accessing array property

*/



const mixedArray = [
    10,                      // Number
    "Hello World",           // String
    true,                    // Boolean
    null,                    // Null value
    undefined,               // Undefined value
    { name: "John", age: 30 }, // Object
    [1, 2, 3],               // Another array
    function() { console.log("Function inside array"); }   // Function
];

// To see the full array in the console
console.log(mixedArray);

// Accessing an element by its index
console.log(mixedArray[1]); // Outputs: "Hello World"

// Accessing an element from the nested object
console.log(mixedArray[5].name); // Outputs: "John"

// Executing the function from the array
mixedArray[7](); // Outputs: "Function inside array"






// আগে ভ্যারিয়েবল আলাদা করে declare করো
const person = { name: "John", age: 30 };  // Object variable
const another = [1, 2, 3]; // Array variable

// তারপর mixedArray এর ভেতরে রাখো
const anothermixedArray = [
    10,                      // Number
    "Hello World",           // String
    true,                    // Boolean
    null,                    // Null value
    undefined,               // Undefined value
    person,                  // Object variable
    another,                 // Array variable
    function() { console.log("Function inside array"); } // Function
];

// টেস্ট করি
console.log(mixedArray[0]); // 10
console.log(mixedArray[1]); // Hello World
console.log(mixedArray[5]); // { name: 'John', age: 30 }
console.log(mixedArray[6]); // [ 1, 2, 3 ]
mixedArray[7]();            // Function inside array





// ------------------------------------------------------------------ Array of a single data type -------------------------------------------------
let numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers);

// --- Add (push, unshift) ---
// Add an element to the end
numbers.push(60);
console.log("After adding 60 to the end (push):", numbers); // [10, 20, 30, 40, 50, 60]

// Add an element to the beginning
numbers.unshift(5);
console.log("After adding 5 to the beginning (unshift):", numbers); // [5, 10, 20, 30, 40, 50, 60]

// --- Update ---
// Update the element at index 2 (value 20) to 25
numbers[2] = 25;
console.log("After updating the element at index 2:", numbers); // [5, 10, 25, 30, 40, 50, 60]

// --- Delete (pop, shift, splice) ---
// Delete the last element
numbers.pop();
console.log("After deleting the last element (pop):",numbers)



