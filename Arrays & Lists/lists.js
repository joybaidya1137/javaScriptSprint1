// JavaScript এ "list" বলতে সাধারণত Array বোঝানো হয়।
// Array হলো একটি বিশেষ ভেরিয়েবল যা একাধিক মান (value) একসাথে ধারণ করতে পারে।

// 1. Array তৈরি করা (Creating an Array)
// Array লিটারেল ব্যবহার করে একটি Array তৈরি করা সবচেয়ে সহজ উপায়।
let fruits = ["Apple", "Banana", "Orange"];
console.log("প্রাথমিক Array:", fruits); // আউটপুট: ["Apple", "Banana", "Orange"]

// 2. Array এর উপাদান অ্যাক্সেস করা (Accessing Elements)
// Array এর উপাদানগুলো index নম্বর ব্যবহার করে অ্যাক্সেস করা হয়। Index 0 থেকে শুরু হয়।
let firstFruit = fruits[0]; // প্রথম উপাদান
let secondFruit = fruits[1]; // দ্বিতীয় উপাদান
console.log("প্রথম ফল:", firstFruit); // আউটপুট: Apple
console.log("দ্বিতীয় ফল:", secondFruit); // আউটপুট: Banana

// 3. Array এর দৈর্ঘ্য জানা (Getting the Length)
// .length প্রোপার্টি ব্যবহার করে Array তে কতগুলো উপাদান আছে তা জানা যায়।
console.log("Array এর দৈর্ঘ্য:", fruits.length); // আউটপুট: 3

// 4. Array তে নতুন উপাদান যোগ করা (Adding Elements)
// push() মেথড ব্যবহার করে Array এর শেষে নতুন উপাদান যোগ করা হয়।
fruits.push("Mango");
console.log("push করার পর Array:", fruits); // আউটপুট: ["Apple", "Banana", "Orange", "Mango"]

// unshift() মেথড ব্যবহার করে Array এর শুরুতে নতুন উপাদান যোগ করা হয়।
fruits.unshift("Grapes");
console.log("unshift করার পর Array:", fruits); // আউটপুট: ["Grapes", "Apple", "Banana", "Orange", "Mango"]

// 5. Array থেকে উপাদান মুছে ফেলা (Removing Elements)
// pop() মেথড ব্যবহার করে Array এর শেষ থেকে একটি উপাদান মুছে ফেলা হয়।
let removedFruit = fruits.pop();
console.log("মুছে ফেলা ফল:", removedFruit); // আউটপুট: Mango
console.log("pop করার পর Array:", fruits); // আউটপুট: ["Grapes", "Apple", "Banana", "Orange"]

// shift() মেথড ব্যবহার করে Array এর শুরু থেকে একটি উপাদান মুছে ফেলা হয়।
let firstRemovedFruit = fruits.shift();
console.log("শুরু থেকে মুছে ফেলা ফল:", firstRemovedFruit); // আউটপুট: Grapes
console.log("shift করার পর Array:", fruits); // আউটপুট: ["Apple", "Banana", "Orange"]

// 6. Array এর উপর লুপ চালানো (Iterating over an Array)
// forEach() মেথড ব্যবহার করে Array এর প্রতিটি উপাদানের জন্য একটি ফাংশন চালানো যায়।
console.log("forEach ব্যবহার করে প্রতিটি ফল:");
fruits.forEach(function(fruit, index) {
    console.log(`Index ${index}: ${fruit}`);
});
// আউটপুট:
// Index 0: Apple
// Index 1: Banana
// Index 2: Orange

// 7. Array থেকে নতুন Array তৈরি করা (Creating a new Array with map)
// map() মেথড একটি নতুন Array তৈরি করে, যেখানে প্রতিটি উপাদানের উপর একটি ফাংশন চালানো হয়।
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log("map ব্যবহার করে নতুন Array:", upperCaseFruits); // আউটপুট: ["APPLE", "BANANA", "ORANGE"]

// 8. উপাদান খোঁজা (Finding an Element)
// indexOf() মেথড একটি উপাদানের প্রথম index নম্বর রিটার্ন করে। যদি না পাওয়া যায় তবে -1 রিটার্ন করে।
let bananaIndex = fruits.indexOf("Banana");
console.log("Banana এর Index:", bananaIndex); // আউটপুট: 1

let strawberryIndex = fruits.indexOf("Strawberry");
console.log("Strawberry এর Index:", strawberryIndex); // আউটপুট: -1