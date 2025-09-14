
//..................................... user input for array..................................
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//👉 rl.question() ফাংশন ইউজারের কাছ থেকে একটি প্রশ্ন করে ইনপুট নেয়।
rl.question('Enter fruits separated by commas (e.g., apple,banana,orange): ', (answer) => {   //(answer) => { ... } হলো একটি callback function, যেখানে ইউজারের দেওয়া ইনপুট answer ভ্যারিয়েবলে পাওয়া যাবে।
   
   /* 👉 এই লাইন ইউজারের ইনপুটকে প্রসেস করছে:
      1) answer.split(',') → ইনপুটকে কমা দিয়ে ভাগ করা হচ্ছে।  যেমন: "apple, banana , orange" হলে → ["apple", " banana ", " orange"] হবে।
      2) .map(item => item.trim()) → প্রতিটি আইটেমের চারপাশের ফাঁকা জায়গা (space) কেটে ফেলা হচ্ছে। 
      এখন হবে ["apple", "banana", "orange"]।  
      3) .filter(item => item) → খালি স্ট্রিং থাকলে সেগুলো বাদ দেবে। */
    const fruitsFromUser = answer.split(',').map(item => item.trim()).filter(item => item);
    



// Use user input if provided, otherwise use the default

// এখানে আসলে ternary operator (? :) ব্যবহার করা হয়েছে। (শর্ত ? সত্য হলে এই কাজ : মিথ্যা হলে এই কাজ)

const fruitsToUse = fruitsFromUser.length > 0 ? fruitsFromUser : fruits; /* এখানে আসলে ternary operator (? :) ব্যবহার করা হয়েছে।
এটাকে বাংলায় বললে হলো – if-else এর শর্টকাট। 
1)fruitsFromUser.length > 0 👉 শর্ত  (মানে ইউজারের দেওয়া লিস্টে কতগুলো আইটেম আছে। যদি 0-এর বেশি হয়, ইউজার ইনপুট দিয়েছে।)
2)fruitsFromUser 👉 যদি শর্ত সত্য হয় (মানে ইউজার আসলেই কিছু দিয়েছে), তাহলে এটা ব্যবহার করবে।
3)fruits 👉 যদি শর্ত মিথ্যা হয় (মানে ইউজার কিছুই দেয়নি), তাহলে ডিফল্ট fruits অ্যারে ব্যবহার করবে।


(Note:// The ternary operator is a shortcut for the following if-else block:)
let fruitsToUse;
if (fruitsFromUser.length > 0) {
    fruitsToUse = fruitsFromUser;
} else {
    fruitsToUse = fruits;
}
*/

    console.log('\n--- Looping over:', fruitsToUse, '---\n');

// Re-running loop examples with the new array
    runAllLoops(fruitsToUse);

    rl.close();
});

function runAllLoops(arr) {
    // 1. for loop
    for (let i = 0; i < arr.length; i++) {
        console.log(`for loop: ${arr[i]}`);
    }

    // 2. for...of loop
    for (const item of arr) {
        console.log(`for...of loop: ${item}`);
    }

    // 3. forEach loop
    arr.forEach((item, index) => {
        console.log(`forEach loop: ${item} at index ${index}`);
    });

    // 4. while loop
    let i = 0;
    while (i < arr.length) {
        console.log(`while loop: ${arr[i]}`);
        i++;
    }

    // 5. do...while loop
    let j = 0;
    if (arr.length > 0) {
        do {
            console.log(`do...while loop: ${arr[j]}`);
            j++;
        } while (j < arr.length);
    } else {
        console.log('do...while loop: array is empty');
    }
}   




// other code loops er 

const fruits = ['apple', 'banana', 'orange', 'grape'];

// 1. for loop
// Logic: Uses counter variable; explicit index access
// Stopping condition: Counter less than array length
function forLoopExample() {
    for (let i = 0; i < fruits.length; i++) {
        console.log(`for loop: ${fruits[i]}`);
    }
}

// 2. for...of loop
// Logic: Directly iterates over array elements
// Stopping condition: Automatically stops at array end
function forOfLoopExample() {
    for (const fruit of fruits) {
        console.log(`for...of loop: ${fruit}`);
    }
}

// 3. forEach loop
// Logic: Executes callback for each element
// Stopping condition: Built-in, stops after last element
function forEachLoopExample() {
    fruits.forEach((fruit, index) => {
        console.log(`forEach loop: ${fruit} at index ${index}`);
    });
}

// 4. while loop
// Logic: Manual counter with condition check
// Stopping condition: Counter less than array length
function whileLoopExample() {
    let i = 0;
    while (i < fruits.length) {
        console.log(`while loop: ${fruits[i]}`);
        i++;
    }
}

// 5. do...while loop
// Logic: Executes at least once, then checks condition
// Stopping condition: Counter less than array length
function doWhileLoopExample() {
    let i = 0;
    do {
        console.log(`do...while loop: ${fruits[i]}`);
        i++;
    } while (i < fruits.length);
}

// Execute all examples 


forLoopExample();
forOfLoopExample();
forEachLoopExample();
whileLoopExample();
doWhileLoopExample();
