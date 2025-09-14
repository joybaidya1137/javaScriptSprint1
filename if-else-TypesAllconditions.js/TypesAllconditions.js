let isLogin =true;
let isAdmin = false;
let a=10;
let b=20;
let c=10;
let d=20;

// if else conditoons nested if
if(isLogin){
    console.log("user is Logged in");
    if(isAdmin){
        console.log("Wellcome admin");
    } else {
        console.log("Welcome user");
    }
}

if(a<b){
    if(isLogin==isLogin){
        if(c!=d){
            console.log("daspaly",a,b);
            console.log("daspaly c+d=10+20:",(c+b));
        }
    }
} 

else{console.log("nothing")};



// if , elseif, else conditions


let temperature = 25; // Celsius

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's a bit chilly.");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("It's a nice day.");
} else {
  console.log("It's very hot!");
}


let marks = 75;
let attendance = 80;

// Pass condition: marks >= 40 OR attendance >= 75
if (marks >= 40 || attendance >= 75) {
    console.log("Passed");
} else {
    console.log("Failed");
}



// ternary opration 
let age = 18;
let s = (age >= 18) ? "Adult" : "Not Adult";
console.log(s);


let mark = 85;

let grade = (mark >= 80) ? "A+"
           : (mark >= 70) ? "A"
           : (mark >= 60) ? "B"
           : (mark >= 50) ? "C"
           : "F";

console.log("Grade:", grade);


// ternary opration 
let username = "joy";
let password = "1234";

let loginStatus = (username === "joy" && password === "1234") // ture contuion then 
    ? "Login Successful" // true: then login successful print korbe
    : "Login Failed"; 

console.log(loginStatus);


// tarnarry operations 
username="baidya bhai"
console.log(" username:",username);

