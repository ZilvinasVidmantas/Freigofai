// Older than me - https://edabit.com/challenge/iwdZiFucR5wkQsFHu
// class is a template for an object
// you can create class object with the new operator and invoking class constructor function
// this, means what it means in real life:
//   thing/object whas was mentioned just before.
class Person {
  // constructor is a function which is used when crating objects with <new operator>
  constructor(name, age) {
    // JUST FOR CONSTRUCTORS: this -> {}
    this.name = name; // {name: '...', }
    this.age = age; // {name: '...', surname: '...'}
  }

  compareAge(other) {
    if (this.age === other.age)
      return `${other.name} is the same age as me.`
    if (this.age > other.age)
      return `${other.name} is younger than me.`
    return `${other.name} is older than me.`
  }

  // When calling functions, <this> is refered, as the object from which it was called.
  sayYourName() {
    console.log('My name is ' + this.name);
  }

}
// new - is a new memory space (new object)
// new keybword is used when crating class objects (class instances)

// When you write, keyword <new>, and empty object is created. Function call, which is after the <new> keyword
// can access the newly created memory, by reference keyword <this>.
// In such manner the newly created memory, can be altered by the subsequent function call.
// class Is a special structure, which executes <constructor> function whenever it is invoked with keyword <new>.

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)
// p1.sayYourName();
// p3.sayYourName();

console.log(p1.compareAge(p2));  // ➞ "Joel is older than me."
console.log(p2.compareAge(p1));  // ➞ "Samuel is younger than me."
console.log(p1.compareAge(p3));  // ➞ "Lily is the same age as me."