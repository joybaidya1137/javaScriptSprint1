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
 
