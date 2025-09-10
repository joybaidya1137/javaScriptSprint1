
//Data types in java script for const varibales
const integerconst = 42; // Number
const floatconst = 3.14; // Number
const doubleconst = 2.718281828459045; // Number
const stringconst = "Hello, World!"; // String
const booleanconst = true; // Boolean

const arrayconst = [1, 2, 3, 4, 5]; // Array
const objectconst = { name: "Alice", age: 30 }; // Object means key-value pairs  and key -value means property and value

const nullconst = null; //  decerared  and assigned value is null // programer intentionaly assigned null value
const undefinedconst = undefined; // Undefined means variable is declared but not assigned a value // js assigned undefined value


// Data types in java script for let varibales 

let integerlet = 42; // Number
let floatlet = 3.14; // Number
let doublelet = 2.718281828459045; // Number
let stringlet = "Hello, World!";
let booleanlet = true; // Boolean

let arraylet = [1, 2, 3, 4, 5]; // Array
let objectlet = { name: "Alice", age: 30 }; // Object means key-value pairs  and key -value means property and value    
let nullllet = null; //  decerared  and assigned value is null // programer intentionaly assigned null value
let undefinedlet = undefined; // Undefined means variable is declared but not assigned a value // js assigned undefined value





// create example for const and let use data types  and check the output in console and typeof operator 
console.log("Const Variables:");

console.log("Integer:", integerconst, "Type:", typeof integerconst);
console.log("Float:", floatconst, "Type:", typeof floatconst);
console.log("Double:", doubleconst, "Type:", typeof doubleconst);
console.log("String:", stringconst, "Type:", typeof stringconst);
console.log("Boolean:", booleanconst, "Type:", typeof booleanconst);

console.log("Array:", arrayconst, "Type:", typeof arrayconst);
console.log("Object:", objectconst, "Type:", typeof objectconst);

console.log("Null:", nullconst, "Type:", typeof nullconst); 
console.log("Undefined:", undefinedconst, "Type:", typeof undefinedconst);
// Note: typeof null returns "object" due to a historical bug in JavaScript

console.log("\nLet Variables:");
console.log("Integer:", integerlet, "Type:", typeof integerlet);
console.log("Float:", floatlet, "Type:", typeof floatlet);
console.log("Double:", doublelet, "Type:", typeof doublelet);
console.log("String:", stringlet, "Type:", typeof stringlet);
console.log("Boolean:", booleanlet, "Type:", typeof booleanlet);

console.log("Array:", arraylet, "Type:", typeof arraylet);
console.log("Object:", objectlet, "Type:", typeof objectlet);

console.log("Null:", nullllet, "Type:", typeof nullllet); 
console.log("Undefined:", undefinedlet, "Type:", typeof undefinedlet);
// Note: typeof null returns "object" due to a historical bug in JavaScript 



console.log("\n");

//...............................................now array and object data types examples............................................
// Array example
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits Array:", fruits);
console.log("First Fruit:", fruits[0]); // Accessing first element
console.log("Array Length:", fruits.length); // Length of the array 
fruits.push("Date"); // Adding an element to the array
console.log("Updated Fruits Array:", fruits);// Updated array after push operation
fruits.pop(); // Removing the last element from the array
console.log("After Pop Fruits Array:", fruits); // Updated array after pop operation
fruits.splice(1, 1); // Removing the second element (Banana)
console.log("After Splice Fruits Array:", fruits); // Updated array after splice operation
fruits[0] = "Apricot"; // Modifying the first element
console.log("After Modification Fruits Array:", fruits); // Updated array after modification
console.log("Type of Fruits Array:", typeof fruits); // Type of the array
console.log("Is Fruits an Array?:", Array.isArray(fruits)); // Checking if it's an array
console.log("\n");


// Object example
const person = {
    name: "John",
    age: 25,
    isStudent: false,
    hobbies: ["Reading", "Traveling", "Swimming"],  // Array as a property
    address: { // Nested object as a property   
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log("Person Object:", person);
console.log("Name:", person.name); // Accessing property using dot notation
console.log("Age:", person["age"]); // Accessing property using bracket notation
console.log("Hobbies:", person.hobbies);
console.log("First Hobby:", person.hobbies[0]); // Accessing first hobby
console.log("Second Hobby:", person.hobbies[1]); // Accessing second hobby
console.log("City:", person.address.city); // Accessing nested object property
console.log("Type of Person Object:", typeof person); // Type of the object

person.age = 26; // Modifying a property
console.log("Updated Age:", person.age); // Updated age after modification
person.email = "Joybaidya1137@gmail.comm"; // Adding a new property
console.log("After Adding Email Property:", person); // Updated object after adding new property

delete person.isStudent; // Deleting a property
console.log("After Deleting isStudent Property:", person); // Updated object after deleting property
console.log("Is person an Object?:", person instanceof Object); // Checking if it's an object


console.log("\n");

person.name = "Joy baidya"; // Modifying the name property
console.log("After Modifying Name Property:", person); // Updated object after modifying name property










