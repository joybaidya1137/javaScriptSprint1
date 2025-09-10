//.................. 1.Var type variable........................//

var  nameVar = "Prince Joy";
console.log("variable namevar dasplay:",nameVar);
//allow reassign value this var type variable
nameVar = " Joy Baidya";
console.log("change value variable namevar dasplay:",nameVar);


var numberVar = 20;
console.log("change value variable numbervar dasplay:",numberVar);

//allow reassign value this var type variable
numberVar = 25;
console.log("change value variable numbervar dasplay:",numberVar);
//console.log("type of numberVar:",typeof numberVar); // it will show the type of variable


//allowed redeclare this var type variable
var numberVar = 30;
console.log("redeclare variable numbervar dasplay:",numberVar);
console.log("type of numberVar:",typeof numberVar); // it will show the type of variable


var booleanVar = true;
console.log("variable booleanVar dasplay:",booleanVar);
//allow reassign value this var type variable
booleanVar = false;
console.log("change value variable booleanVar dasplay:",booleanVar);

 var booleanVar = "Now I am string"; // allowed redeclare this var type variable
    console.log("redeclare variable booleanVar dasplay:",booleanVar);
    console.log("type of booleanVar:",typeof booleanVar); // it will show the type of variable


     var doubleVar = 10.5; // if you declare a variable without var, let or const, it becomes a global variable
    console.log("variable doubleVar dasplay:",doubleVar);
    //allow reassign value this var type variable
    doubleVar = 15.75;
    console.log("change value variable doubleVar dasplay:",doubleVar);
    console.log("type of doubleVar:",typeof doubleVar); // it will show the type of variable

    var doubleVar = "Now I am string"; // allowed redeclare this var type variable
    console.log("redeclare variable doubleVar dasplay:",doubleVar);
    console.log("type of doubleVar:",typeof doubleVar); // it will show the type of variable


//..........................Scope of var type variable......................//

//scope Test (var  is function scope)
function testVar(){
    var functionVar = "I am function scope variable";
    console.log(functionVar);
}
// console.log(functionVar);  it will give error because functionVar is not accessible outside the function 
// Note: if you declare a variable with var inside a function, it is not accessible outside the function.

testVar(); 

// var declare without function then it is global scope and accessible everywhere
var globalVar = "I am global scope variable";
function testGlobalVar(){
    console.log(globalVar);
}
function testVar2(){
    //console.log(functionVar); // it will give error because functionVar is not accessible outside the function
    console.log(globalVar); // it will work because globalVar is accessible everywhere
}


if (true){
    var blockVar = "I am block scope variable";
    console.log(blockVar); // it will work because blockVar is accessible inside the block
}
console.log(blockVar); // it will work because blockVar is accessible outside the block

function testVar3(){
    if (true){
     var functionBlockVar = "I am function block scope variable1234";
        console.log(blockVar); // it will work because blockVar is accessible inside the function
    }

}

function testVar4(){
    //console.log(functionBlockVar); // it will give error because functionBlockVar is not accessible outside the block
}

 function testVar5(){
   var testVar5functionBlockVar = "I am testVar5 function block scope variable";
}

var age=25;
var conditionVar = age >18;
if (true){
   // console.log(testVar5functionBlockVar); 
   // it will give error because testVar5functionBlockVar is not accessible outside the function
    console.log(conditionVar); // it will work because conditionVar is accessible everywhere
}





// .....................................user input  use var type variable.................................................................

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // stdin is a standard input stream. input: process.stdin means the input will be taken from the standard input stream (usually the keyboard).
  output: process.stdout // stdout is a standard output stream. output: process.stdout means the output will be written to the standard output stream (usually the console).
});


// rl.question is a method that takes two arguments: a question (string) and a callback function. The callback function is called with the user's input as its argument.
// The rl.question method displays the question to the user and waits for the user to input a response. Once the user inputs a response and presses Enter, the callback function is executed with the user's input.
rl.question('Enter your name: ', (name) => { 
  rl.question('Enter your age: ', (age) => {
    const userAge = parseInt(age); // Convert age to a number

    rl.question('Enter your city: ', (city) => {

      rl.question('Enter your email address: ', (email) => {

        console.log(`Hello, ${name}!`);
        console.log(`You are ${userAge} years old.`);
        console.log(`You live in ${city}.`);
        console.log(`Your email address is ${email}.`);

        rl.close(); 
      });

    });

  });
});




// Let var type variable........................//
 let namelet = "Prince Joy";
    console.log("variable namelet dasplay:",namelet);
    //allow reassign value this let type variable
    namelet = " Joy Baidya";
    console.log("change value variable namelet dasplay:",namelet);
    //let namelet = "Now I am string"; // not allowed redeclare this let type variable
    //console.log("redeclare variable namelet dasplay:",namelet); // it will give error because let type variable cannot be redeclared
    console.log("type of namelet:",typeof namelet); // it will show the type of variable

    let numberlet = 20;
    console.log("variable numberlet dasplay:",numberlet);
    //allow reassign value this let type variable
    numberlet = 25;
    console.log("change value variable numberlet dasplay:",numberlet);
    //let numberlet = 30; // not allowed redeclare this let type variable
    //console.log("redeclare variable numberlet dasplay:",numberlet); // it will give error because let type variable cannot be redeclared
    console.log("type of numberlet:",typeof numberlet); // it will show the type of variable

    let booleanlet = true;
    console.log("variable booleanlet dasplay:",booleanlet);
    //allow reassign value this let type variable
    booleanlet = false;
    console.log("change value variable booleanlet dasplay:",booleanlet);    
    //let booleanlet = "Now I am string"; // not allowed redeclare this let type variable
    //console.log("redeclare variable booleanlet dasplay:",booleanlet); // it will give error because let type variable cannot be redeclared
    console.log("type of booleanlet:",typeof booleanlet); // it will show the type of variable

    let doublelet = 10.5;
    console.log("variable doublelet dasplay:",doublelet);
    //allow reassign value this let type variable
    doublelet = 15.75;
    console.log("change value variable doublelet dasplay:",doublelet);
    //let doublelet = "Now I am string"; // not allowed redeclare this let type variable
    //console.log("redeclare variable doublelet dasplay:",doublelet); // it will give error because let type variable cannot be redeclared
    console.log("type of doublelet:",typeof doublelet); // it will show the type of variable




//..........................Scope of let type variable.........................................//

//scope Test (let  is block scope)
function testLet(){
    let functionLet = "I am function scope variable";
    console.log(functionLet);
}   
//console.log(functionLet);  it will give error because functionLet is not accessible outside the function
// Note: if you declare a variable with let inside a function, it is not accessible outside the function.

testLet();

// let declare without function then it is global scope and accessible everywhere

let globalLet = "I am global scope variable";
function testGlobalLet(){
    console.log(globalLet);
}
function testLet2(){
    //console.log(functionLet); // it will give error because functionLet is not accessible outside the function
    console.log(globalLet); // it will work because globalLet is accessible everywhere
}

if (true){
    let blockLet = "I am block scope variable";
    console.log(blockLet); // it will work because blockLet is accessible inside the block
}

//console.log(blockLet); // it will give error because blockLet is not accessible outside the block
// Note: if you declare a variable with let inside a block, it is not accessible outside the block.

function testLet3(){
    if (true){
     let functionBlockLet = "I am function block scope variable1234";
        console.log(functionBlockLet); // it will work because functionBlockLet is accessible inside the function
    }
    // console.log(functionBlockLet); // it will give error because functionBlockLet is not accessible outside the block        
}
function testLet4(){
    //console.log(functionBlockLet); // it will give error because functionBlockLet is not accessible outside the block
}


console.log(globalLet); // it will work because globalLet is accessible everywhere






// ......................const var type variable........................//
const nameconst = "Prince Joy";
console.log("variable nameconst dasplay:",nameconst);
//nameconst = " Joy Baidya"; // not allowed reassign value this const type variable
//console.log("change value variable nameconst dasplay:",nameconst); // it will give error because const type variable cannot be reassigned
//const nameconst = "Now I am string"; // not allowed redeclare this const type variable
//console.log("redeclare variable nameconst dasplay:",nameconst); // it will give error because const type variable cannot be redeclared
console.log("type of nameconst:",typeof nameconst); // it will show the type of variable

const numberconst = 20;
console.log("variable numberconst dasplay:",numberconst);
//numberconst = 25; // not allowed reassign value this const type variable
//console.log("change value variable numberconst dasplay:",numberconst); // it will give error because const type variable cannot be reassigned


//const numberconst = 30; // not allowed redeclare this const type variable
//console.log("redeclare variable numberconst dasplay:",numberconst); // it will give error because const type variable cannot be redeclared
console.log("type of numberconst:",typeof numberconst); // it will show the type of variable


const booleanconst = true;
console.log("variable booleanconst dasplay:",booleanconst);
//booleanconst = false; // not allowed reassign value this const type variable
//console.log("change value variable booleanconst dasplay:",booleanconst); // it will give error because const type variable cannot be reassigned
//const booleanconst = "Now I am string"; // not allowed redeclare this const type variable
//console.log("redeclare variable booleanconst dasplay:",booleanconst); // it will give error because const type variable cannot be redeclared
console.log("type of booleanconst:",typeof booleanconst); // it will show the type of variable



const doubleconst = 10.5;
console .log("variable doubleconst dasplay:",doubleconst);








