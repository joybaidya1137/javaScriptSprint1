/*

Definition of Loops
      A loop in programming is a control structure that allows you to repeat a block of code multiple times, 
      either for a fixed number of times or until a condition is met.

Types of Loops (short)
      1.For Loop → Repeats code for a fixed number of times.
      2.While Loop → Repeats code while a condition is true.
      3.Do-While Loop → Similar to while, but runs the code at least once before checking the condition.

Why use Loops?
    1.Avoid repetition → Instead of writing the same code many times, you just use a loop.
    2.Automation → Useful for tasks like printing numbers 1–100, processing a list, or reading files.
    3.Dynamic execution → Handles cases where the number of repetitions isn’t known in advance.
*/


/*  
Types of Loops (short)
For Loop → Repeats code for a fixed number of times.
While Loop → Repeats code while a condition is true.
Do-While Loop → Similar to while, but runs the code at least once before checking the condition.



>>>>>>>>>>>>>>>>for loops<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Definition: A loop used when you know how many times you want to repeat 
something and need an index (a counter like 0, 1, 2...) to track each step.

For Loop → Repeats code for a fixed number of times.

for (initialization; condition; update) {
  // code to execute
}


*/

console.log('.............................Number types for loops..............................')

console.log(newline = '\n' );
console.log('1.Integer number typs for loop')
for (let i = 0; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

for (let i = 0; i <= 10; i++) {
    
    if (i + 2 === 2) 
        console.log("i + 2 == 2:", i);
    }

for (let i = 0; i <= 10; i++) {
    if (i - 2 === 5) {
        console.log("i - 2 == 5:", i);
    }
}
for (let i = 0; i <= 10; i++) {

    if (i * 2 === 18) {
        console.log("i * 2 == 18:", i);
    }
}


console.log(newline = '\n' );

console.log('2.Float number typs for loop')
for (let i = 0; i <= 10; i += 0.5) {

    if (i % 2 === 0.5) {
        console.log("float number:", i);
    }   
}
for (let i = 0; i <= 10; i += 0.5) {
    if (i + 2 === 2) 
        console.log("i + 2 == 2:", i);  
    }
for (let i = 0; i <= 10; i += 0.5) {
    if (i - 2 === 5) {
        console.log("i - 2 == 5:", i);
    }
}


console.log(newline = '\n' );

console.log('3.Negative number typs for loop')
for (let i = -10; i <= 0; i++) {    
    if (i % 2 === 0) {
        console.log("Negative Even:", i);
    }
}
for (let i = -10; i <= 0; i++) {    
    if (i + 2 === -8) {
        console.log("i + 2 == -8:", i);
    }
}   
for (let i = -10; i <= 0; i++) {    
    if (i - 2 === -12) {
        console.log("i - 2 == -12:", i);
    }   
}






 //......................... Nested for loop....................
let n=10;
for(let i=0; i<=n;i++){
    console.log("desplay 0 to 10:",i);
    
    for(let j=3; j<=n; j++){
    if(i%2==0){
        console.log("even number:",i)
        if(i==8){
            console.log("Brack",i)
        break;
        }
    }else{
        console.log("Odd numnber:",i);
    }
}
}