/* 
1.this হলো একটা special keyword যেটা function এর ভেতরে ব্যবহার করলে জানায় —
“এই function টাকে কে call করছে?”

// 2. this = যেই object function টাকে call করছে সেটা”
*/



// ===== 1. Global Scope =====
console.log("Global scope this:");
console.log(this); // Browser → window, Node → global
// 'this' এখানে global object কে refer করছে



// ===== 2. Object Method =====
const person = {
    name: "Joy",
    greet: function() {
        console.log("Object method this:", this);
        console.log("Hello, I am " + this.name);
    }
};

person.greet();

// 'this' এখানে object 'person' কে refer করছে




// ===== 3. Arrow Function inside Object =====
const personArrow = {
    name: "Alex",
    greet: () =>{
        console.log("Arrow function this inside object:", this);
        console.log("Hello, I am " + this.name);
    }
};

personArrow.greet();
// Arrow function নিজের 'this' রাখে না, তাই outer scope (global) থেকে this নেয়
// Output name undefined





// ============== 4. Constructor Function ====================

function Car(brand,model){
 const name="joy baidya"

 this.Brand = brand; // 'this' → নতুন তৈরি object
 this.Model = model;
  console.log(name);
  console.log(this.name);
 console.log(this.name=name);
 this.show = function(){
    console.log(this.name);
    console.log("Car brand:"+ this.Brand + ", Model:"+this.Model)
 }

 this.Joy=function(){
    console.log("Car brand:"+ this.Brand + ", Model:"+this.Model);
 }

 this.Jo=function(){
    console.log(" yessssssssssssssssssssssssssss Car brand: BMW, Model: BMW74");
}

}

const Mycar = new Car("BMW","BMW74");


Mycar.show();
// Constructor এ 'this' → object myCar refer করছে
Mycar.Joy();
Mycar.Jo();




// ===== 5. Class with Constructor & Methods =====
class PersonClass {
    constructor(name, age) {
        this.name = name; // object property
        this.age = age;
    }

    greet() {
        console.log("Class method this:", this);
        console.log(`Hello, I am ${this.name}, ${this.age} years old`);
    }
}

const joy = new PersonClass("joy",22);
joy.greet();
// 'this' এখানে joy object কে refer করছে



// ===== 6. Arrow Function inside Class ==================================================

class PersonArrowClass {
    constructor(name) {
        this.name = name;
    }
    greet=()=>{
        console.log("Arrow function in class this:",this);
        console.log("hello, I am "+ this.name);

    }
}
const alex= new PersonArrowClass("Joy Baidya");
alex.greet();

// Arrow function inside class → 'this' = surrounding scope (object itself because property is assigned in constructor)
// Modern JS trick: arrow function retains 'this' of class instance






