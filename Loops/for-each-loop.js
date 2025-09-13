const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

// The forEach method executes a provided function once for each array element.
// It's a cleaner, more readable alternative to a traditional for loop for simple iteration.

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)