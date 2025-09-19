/*
 1.Class = Blueprint (নকশা/ছাঁচ/ডিজাইন)
     একটা object কেমন হবে, কী কী property আর method থাকবে।
      
 2. Object = Instance of Class (নকশা থেকে তৈরি আসল বস্তু/বাড়ি)  

⚡এক লাইনে মনে রাখো:
   Class = নকশা (blueprint), Object = সেই নকশা থেকে বানানো বাস্তব জিনিস (instance)।

*/
class car{

   /*
   1.constructor:
      Class field দিয়ে ডিফল্ট property দিতে পারো, constructor এ ইনিশিয়ালাইজ করো।
      Constructor দিলে → তুমি চাইলে object বানানোর সময় আলাদা মান দিতে পারবে।
      ❌ যদি constructor না থাকে → সব object একই default মান পাবে।

Constructor কী করে?
👉 constructor হলো class-এর বিশেষ method
       একটি class এ কেবলমাত্র একটি constructor থাকে।

👉 object বানানোর সময় new keyword দিয়ে ডাকা হয়
👉 property গুলো initialize (প্রথম মান সেট করা) করে

Constructor = object বানানোর সময় প্রোপার্টি ইনিশিয়ালাইজ করার বিশেষ method।
   */
  constructor(brand,model){ // special method = constructor
   this.brand = brand;     // object property সেট করছে
   this.model = model; 
  }



  //Function → Class এর বাইরে, নিজে independent।
  //Method → Class এর ভিতরে, object এর সাথে যুক্ত। 
  // showinfo is method because Class এর ভিতরে, object এর সাথে যুক্ত। 
  showinfo(){
   return `${this.brand} "," ${this.model}`;
   
  }


//যদি তুমি শুধু প্রিন্ট করতে চাও:
showPrint() {
    console.log(this.brand + "," + this.model);

}
 
//যদি তুমি মান return করতে চাও:
show_return() {
    return this.brand + "," + this.model;
}
}

const obj = new car("Toyota", "Corolla");
const obj1 = new car("Honda", "Civic");


console.log(obj.model,obj.brand);  // "Toyota", "Corolla"
console.log(obj.model) // "Toyota"

console.log(obj.showinfo());

console.log(obj1.model,obj1.brand); //"Honda", "Civic"
console.log(obj1.model);//Honda


console.log("\n"+"Return and print output: ")
obj.showPrint();
obj1.showPrint();


obj.show_return();
obj1.show_return();





//Advance use of constructor:
class User{

   constructor(name,age=18){  // default মানও দেওয়া যায়
      this.name = name;
      this.age=age;
   }


     infoDasplay(){
      return `hi i am ${this.name}, ${this.age}`
     }
     /*
      1.return: হলো function বা method এর execution শেষ করে কোনো value কে বাইরে পাঠানো।
                মানে, function এর ভেতরে যা calculation হলো সেটা আমরা বাইরে ব্যবহার করতে চাইলে return করতে হয়।
      */

                

      
}

 const u1= new User("joy",50);
 const u2 = new User("joy");   // age = 18 (default)


  console.log(u1.infoDasplay());
  console.log(u2.infoDasplay());




// ..........................................................................this................................................
    // Constructor এর ভেতরে this = নতুন object বানানো হচ্ছে যেটা, সেটাই।
   // Method এর ভেতরে this = যে object method কে call করছে, সেটাই।

   class C {
      constructor(brand, model) {
    // Constructor এর ভেতরে `this` নতুন object কে বোঝাচ্ছে
    this.brand = brand;
    this.model = model;
  }

  showInfo() {
    // Method এর ভেতরে `this` = যে object দিয়ে method call করা হচ্ছে
    return this.brand + " " + this.model;
  }
}

// 👉 Object বানালাম
const car1 = new C("Toyota", "Corolla");
const car2 = new C("Honda", "Civic");

// Constructor এ `this`
console.log(car1.brand, car1.model); // Toyota Corolla
console.log(car2.brand, car2.model); // Honda Civic

// Method এ `this`
console.log(car1.showInfo()); // Toyota Corolla
console.log(car2.showInfo()); // Honda Civic