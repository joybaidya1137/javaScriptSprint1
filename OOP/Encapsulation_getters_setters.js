/**
 * 🔹 Encapsulation মানে কী?
     1.ডাটা hide করা (protect করা) যাতে বাইরে থেকে direct access করা না যায়।
     2.বাইরে থেকে access করতে হলে → getter / setter ব্যবহার করতে হয়।
         getter = read data and setter = update data 

     3.Public property = সবাই দেখতে/চালাতে পারবে।
     4.Private property = direct বাইরে থেকে access করা যাবে না।
 */

   //  1️⃣ Public Properties (normal)

   class JoyPublic{
    constructor(name,age){
       this.name=name; // public
       this.age=age;  // public
    }

   }

   const Pulic1 = new JoyPublic("joy",18);
   console.log(Pulic1.name+"and"+Pulic1.age) // Joy,22 ✅ public তাই পাওয়া যাবে



   //2️⃣ Private Properties (using #)

   class BankAccount{
    #balance;// private property

    constructor(owner,balance){
        this.owner=owner; //public
        this.#balance =balance; //private
    }
    // Getter → শুধু পড়তে পারবে
    get balance(){
        return this.#balance;
    }

    // Setter → update করতে পারবে
    set balance(amount){
        if(amount<0){
            console.log("Invalid balance!");
        }else{
            this.#balance=amount;
        }
    }
   }

  const acc = new BankAccount("joy",50000);
  console.log(acc.owner);  // Joy ✅ public
  console.log(acc.balance); // 5000 ✅ getter

  acc.balance=8000; // ✅ setter দিয়ে update
  console.log(acc.balance)  // 8000
  acc.balance = -1000;   // ❌ Invalid balance!
  acc.balance = -2000;   // ❌ Invalid balance!
  

/**
 * 🔹 Why Encapsulation?
      1.Sensitive data protect করা যায়
        → যেমন Bank account balance, password, ইত্যাদি।
      2.Access control দেওয়া যায় (getter দিয়ে read-only, setter দিয়ে limited write)।
      3.Code clean, secure, এবং maintainable হয়।

🔹 Quick viva style questions
   1.Encapsulation কী?
    → Data hide করে নিরাপদে রাখার পদ্ধতি।
   2.JavaScript এ private property declare করতে কী ব্যবহার হয়?
    → # (hash symbol)।

   3.Getter & Setter কেন লাগে?
     → Private data বাইরে থেকে access ও update করার জন্য।
 */





//🔹 Advanced Encapsulation in JavaScript

console.log("..............................Advanced Encapsulation in JavaScript.................")


//1️⃣ BankAccount Example (Sensitive Data Protect)

   
class BrakBank{
 #balance; //private
 #pin // private 

 constructor(owner,balance,pin){
    this.owner=owner; // public
    this.#balance=balance; // private 
    this.#pin=pin;   // private 
 }


 // Getter (readonly,pin check )
 getBalance(pin){
    if(pin===this.#pin){
        return `Balance:${this.#balance} BDT`;
    }else{

        return "Wrong PIN!"
    }

 }

 deposit(amount){
    if(amount>0){
      //  this.amount=amount;
       // this.#balance+=this.amount; or
    
         this.#balance+=amount;
        return `Deposited ${amount}.New balance:${this.#balance}`
        }else{
              return "Deposoted failed!"
            }
      }



      withdrow(amount,pin){
        if(pin!==this.#pin){
            return "wrong PIN"
        }
        else if(amount>this.#balance){
            return "Insufficient balance!"
        }else{
        this.#balance=this.#balance-amount;
        return`Withdrow ${amount}. Now Main balance is: ${this.#balance}`
        }
      }


}
const BrakBankObj1 =new BrakBank("JOY BAIDYA",75000,12345);
console.log(BrakBankObj1.getBalance(12345));

console.log(BrakBankObj1.deposit(5000));

console.log(BrakBankObj1.withdrow(5000,12345));

console.log(BrakBankObj1.balance);




//..................................................................More complex Example:.......................................................................


console.log("..............................Complex Example: E-Commerce Cart System.................")

class ShoppingCart {
  #items = []; // private array

  addItem(product, price, qty = 1) {
    this.#items.push({ product, price, qty });
  }

  removeItem(product) {
    this.#items = this.#items.filter(item => item.product !== product);
  }

  get totalAmount() {
    return this.#items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getCartDetails() {
    return this.#items.map(item => `${item.product} x${item.qty} = ${item.price * item.qty}`).join("\n");
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem("Laptop", 60000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 3000, 1);

console.log(cart.getCartDetails());
/*
Laptop x1 = 60000
Mouse x2 = 2000
Keyboard x1 = 3000
*/

console.log("Total:", cart.totalAmount); // 65000
cart.removeItem("Mouse");
console.log("After Removing Mouse:", cart.totalAmount); // 63000
