/* Variable is a reference to computers memory.
  There are 3 ways of variable usage:
    Declaration - say to computer, that some keyword will be refering to computers memory
    Assignment - set value to variable, which will be refered by variable's name
    Usage - use value which is save by the variable
  In many cases delaration and assignment is done one same command, for readability purpose.
  It's good pratice to declare variables before using them, despite that
    JavaScript is a loosly typed programming language.

  PRO TIP: Always use 'const' keyword unless you know that value will be changed.
*/

// Single declaration. This line says to computer, that keyword 'name' will be refering to memory in RAM.
let fullName;

// Multiple declaration. You can declara multiple vatiables with one line.
let age, height, weight;

// Assignment. The memory alocated by variable name will be set to value writen after equal signs:
fullName = 'Tom Tomkovsky';
height = 169;
age = 17;
weight = 61;

// Declaration and assignment can be writen in single expression:
let address = 'Samuray street. 472-4a, Viena, Austria.';

// Variable ussage:
console.log('My name is:', fullName);
console.log('I live at:', address);

// Declaration + Assignment + Variable ussage
// ↙↙↙↙↙ new variable declaration [3]
// ↙↙↙↙     ↙ other variable usage in mathematical expression [1]
let bmi = weight / (height / 100) ** 2;
//        ↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖↖ assigning value after equal sign to the declared variable [2]
console.log('My body mass index is:', bmi);

/*
  'let' keyword is declaration syntax keyword which states, that variables value can be changed
  'const' syntax keyword states, that variable value is final, and can't be changed.
    therefore you must assign and declare this kind of variables at the same time.
*/
const identityCode = 35689548798;
const father = {
  name: 'Viktor',
  surname: 'Tomkovsky',
  age : 42,
};
// this command will cause error, because of const variable redeclaration
// father = {
//   name: 'Some other dude',
//   surname: 'Kaspersky',
//   age: 39
// }

console.log('My identity code is:', identityCode);
console.log('My father is:', father);


