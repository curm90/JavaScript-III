/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope 'this' will refer to the window object.
* 2. When a function is called after a dot, 'this' will refer to the object before the dot (or to the left of the dot).
* 3. Whenever a constructor function is used, 'this' will refer to the instance of the object that is created and returned by the constructor function.
* 4. When we use the call or apply method, 'this' is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(greeting) {
  console.log(this);
  return greeting  
}

sayHello('Hello');

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Hello',
  sayHello(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Liam')

// Principle 3

// code example for New Binding
function Person(name) {
  this.greeting = 'Hello';
  this.name = name;
  this.speak = function() {
    console.log(`${this.greeting} ${this.name}`);
    console.log(this); 
  }
}
const liam = new Person('Liam');
const steve = new Person('Steve');

liam.speak();
steve.speak();

// Principle 4

// code example for Explicit Binding
liam.speak.call(steve);
steve.speak.apply(liam);