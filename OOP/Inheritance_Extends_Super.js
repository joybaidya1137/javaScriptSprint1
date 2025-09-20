/**
 
 * 🔥 Inheritance কী?
👉 যখন একটা child class অন্য একটা parent class থেকে property আর method নিয়ে নেয়, সেটাই Inheritance।
👉 JavaScript-এ extends দিয়ে inheritance করা হয়।


 */


//🟢 Step 1: Parent Class বানাই
class Parent{
    constructor(type,seat,speed){
        this.type=type;
        this.speed=speed;
        this.seat=seat;
    }
    showType(){
        return `${this.type} is starting and seat is:  ${this.seat} and speed: ${this.speed}`;
    }
}

//🟡 Step 2: Child Class বানাই (extends)

class Child  extends Parent{
     constructor(brand,model){
        super("Car",5,"1500cc"); // super দিয়ে parent এর constructor call করতে হবে
        this.brand=brand;
        this.model=model;
     }
     info(){
        return `${this.brand} ${this.model}`;
     }
}


const obj1 = new Child ("BMW","Colora");
console.log(obj1.showType()); // Car is starting... (parent class থেকে এসেছে)
console.log(obj1.info());  // Toyota Corolla (child class এর method)
 

console.log("\n","....................Override methode Understanding:.........................................")
/**
 * 🔹 Method Override মানে কী?
            1.Override মানে হলো child class নিজের version লিখে parent class method replace করছে।
            2.Parent class method এখন child object দিয়ে call করলে child version run হবে।
            3.চাইলে child class থেকে super.method() দিয়ে parent version call করা যায়।
 */


//1.চলো step by step দেখাই কীভাবে parent class বানাই, child class extend করি, এবং method override করি।
class P1{
    constructor(type, engine){
        this.type=type;
        this.engine = engine;

    }
   joy(){
     return `${this.type} with ${this.engine} engine is starting...`;
   }

   joybaidya() {
    return `Type: ${this.type}, Engine: ${this.engine}`;
  }
}

//2️⃣ Child Class বানানো (extends)

class C1 extends P1{
    constructor(brand,model,engine){
        super("Car",engine); // parent constructor call
        this.brand=brand;
        this.model=model;
        this.engine=engine;
    }

    joy(){
        return  `${this.brand} ${this.model} is starting `; 
    }

    Carinfo(){
       return `${this.brand} ${this.model} → ${super.joybaidya()}`;
    }

}

const child1 = new C1("Toyota", "Corolla", "1500cc");

console.log(child1.joy()); 
console.log(child1.Carinfo());





console.log("\n","..........................Complex Inheritance Example:...................................");
console.log("\n","1️⃣ Parent Class (Vehicle):");

 class Vehicle {
    constructor(type, engine, tires) {
        this.type = type;
        this.engine = engine;
        this.tires = tires;
    }

    start() {
        return `${this.type} with ${this.engine} engine is starting...`;
    }

    info() {
        return `Type: ${this.type}, Engine: ${this.engine}, Tires: ${this.tires}`;
    }
}


console.log("\n","First Child Class (Car):");

class Car extends Vehicle {
    constructor(brand, model, engine, tires, seats) {
        super("Car", engine, tires); // parent constructor
        this.brand = brand;
        this.model = model;
        this.seats = seats;
    }

    // override start
    start() {
        return `${this.brand} ${this.model} with ${this.engine} engine is starting in style!`;
    }

    carInfo() {
        return `${this.brand} ${this.model} → ${super.info()}, Seats: ${this.seats}`;
    }
}


console.log("\n","Second Child Class (ElectricCar, inherits Car):");


class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity, tires, seats) {
        super(brand, model, "Electric", tires, seats); // engine="Electric"
        this.batteryCapacity = batteryCapacity;
    }

    // override start
    start() {
        return `${this.brand} ${this.model} is starting silently with battery ${this.batteryCapacity} kWh!`;
    }

    fullInfo() {
        return `${this.carInfo()} → Battery: ${this.batteryCapacity} kWh`;
    }
}


const tesla = new ElectricCar("Tesla", "Model S", 100, 4, 5);

console.log(tesla.start());    
// Tesla Model S is starting silently with battery 100 kWh!

console.log(tesla.fullInfo()); 
// Tesla Model S → Type: Car, Engine: Electric, Tires: 4, Seats: 5 → Battery: 100 kWh
