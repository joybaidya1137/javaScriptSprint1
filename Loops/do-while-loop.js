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


/* Do-While Loop Syntax
do {
      // code to be executed
} while (condition);
*/

// Print numbers at least once, stop at 5
let i = 0;
do {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);


