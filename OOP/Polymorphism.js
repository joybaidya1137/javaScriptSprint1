/**
 * Polymorphism মানে কী?
👉 একটা কাজ / method → আলাদা আলাদাভাবে কাজ করবে, depending on context (object/class)।
       Poly = many (অনেক)
       Morph = form (রূপ)
মানে → এক নামের method, কিন্তু behavior আলাদা হতে পারে।


*** 2 ধরনের Polymorphism (OOP এ)
     1.Compile-time Polymorphism (Method Overloading)
           একই নামের method, কিন্তু parameter আলাদা।

Java / C++ এ থাকে, কিন্তু JavaScript-এ আসল overloading নেই।


 */


//Example (JS এ simulation):

class mathOps{
    add (a,b){
        return a+b;
    }

    addthree(a,b,c){
        return a+b+c
    }
}

const obj = new mathOps();

console.log(obj.add(6,9));
console.log(obj.addthree(6,9,8));


// 2. Run-time Polymorphism (Method Overriding)
//Example:

class joy{
    RJ(){
        return "Some generic RJ for prant class joy";
    }
}

class ripa extends joy{
    RJ(){
        return "ripa this is extends joy"
    }
}
 
class puja extends joy{
    RJ(){
        return "puja this is extends joy "
    }
}

const J = new joy();
const joy1 = new ripa();
const joy2 = new puja();

console.log(J.RJ());
console.log(joy1.RJ());
console.log(joy2.RJ());

/**
 * 👉 এখানে RJ() method সবার নাম একই, কিন্তু object (J,joy1,joy2) ভেদে আলাদা কাজ করছে।
এটাই Polymorphism!



#################   Viva qusetion:  ####################################
1.What is Polymorphism?
👉 Polymorphism means one name, many forms.
    A single method can behave differently depending on the object or context.




2. Types of Polymorphism?

1.Compile-time Polymorphism (Method Overloading)
       👉 এখানে একই method-এর নাম থাকে, কিন্তু parameter আলাদা হয়।
       👉 Compiler আগেই বুঝে ফেলে কোন method কল হবে।

     📌 Java / C++ এ method overloading হয়, কিন্তু JavaScript এ true overloading নাই।
        JS-এ কেবল default / optional parameter দিয়ে simulate করা যায়।

     // Java Example (true overloading possible)
             class MathOp {
                  int add(int a, int b) {
                   return a + b;
                    }

                  double add(double a, double b) {
                   return a + b;
                    }
                }

 * 

   
2️⃣ Run-time Polymorphism (Method Overriding)

   👉 এখানে Parent class এর method কে Child class নিজের মতো করে implement করে।
   👉 কোনটা কল হবে সেটা runtime এ নির্ধারিত হয়।

   📌 JavaScript এ overriding পুরোপুরি কাজ করে।

// 2. Run-time Polymorphism (Method Overriding)
//Example: upore ace





#### Why is Polymorphism useful?

1.Code reusability: 👉 একই নামের method বা function বিভিন্ন জায়গায় কাজ করতে পারে।
তাতে নতুন method বারবার লিখতে হয় না → কোড ছোট হয়, maintain করা সহজ হয়।

2.Flexibility:
  👉 Polymorphism এর কারণে একই method বিভিন্নভাবে কাজ করতে পারে।
   ফলে developer সহজে কোড extend করতে পারে।

3.Makes OOP powerful: 
   Polymorphism থাকায় object-এর আচরণ runtime এ বদলানো যায়।
   এর ফলে system আরও dynamic এবং scalable হয়। 

4.Same function name can be used for different purposes: 
 👉 একটি নাম মনে রাখলেই হবে, আলাদা আলাদা কাজ object অনুসারে হয়ে যাবে।

vvvv
5.“Why is polymorphism called the backbone of OOP?”
👉 কারণ এটি এক নামকে অনেকভাবে ব্যবহার করার সুযোগ দেয়, ফলে কোড flexible এবং reusable হয়।
 */











