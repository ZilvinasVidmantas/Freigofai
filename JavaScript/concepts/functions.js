/*
  Function is a predefined code block, which can be called multiple types
  Firstly, you must declare a function, and only then you can 'call' it.
    'Function invocation' is a synonym for 'function call'
*/
// Function declaration:
function printHello() {
  console.log('Hello');
}

// Multiple function calls:
console.group('Multiple function calls');
printHello();
printHello();
printHello();
printHello();
console.groupEnd();
console.log();

/*
  Function can accepts variables, and execute code based on that variables
    arguments(args) - variables, that are passed to the function call
    parameters(params) - variables, which accepts arguments
*/

//                        parameters or params                   
function printPersonMessage(person, message) {
  console.log(`${person}: ${message}`);
}

const person1 = 'Alice';
const person2 = 'Bob';
const msg = 'Hello :)';

console.group('Function calls with arguments');
// Funcion calls with arguments
//                 args by value
printPersonMessage('John', 'Hi!');
printPersonMessage('John', msg);
printPersonMessage(person1, 'Good Evening.');
// args passed from others variables
printPersonMessage(person2, msg);
console.groupEnd();
console.log();

/*
  Function can also return value.
  'return' directive retuns the value where the function was called
  It's completely normal to not return a value, but sometimes it is very useful
  If no 'return' directive is present, function returns 'undefined' (a special vriable in Javascript)
*/
// BMI - body mass index
// BMI is calculated by dividing weight by squared height
// default value will be 1 if 3rd argument in not passed
function countBMI(height, weight, numbersAfterDot = 1) {
  const bmi = weight / (height ** 2);
  return Math.round(bmi * 10 ** numbersAfterDot) / 10 ** numbersAfterDot;
}
console.group('Function calls with arguments');
const bmi1 = countBMI(1.81, 85);
const bmi2 = countBMI(1.90, 85, 0);
const bmi3 = countBMI(1.80, 95, 1);
const bmi4 = countBMI(1.70, 75, 2);
console.log({
  bmi1,
  bmi2,
  bmi3,
  bmi4,
  bmi5: countBMI(1.95, 85, 3)
});
console.groupEnd();
console.log();

// Usefull function examples
function countSumOfNumberArr(arrayOfNumbers){
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}
const numbers1 = [1, 5, 7, 8, 9, 6];
const numbers2 = [1, 5, 9, 6];
const numbers3 = [1, 5, 6];
const sum1 = countSumOfNumberArr(numbers1);
const sum2 = countSumOfNumberArr(numbers2);
console.group('Sum of number array');
console.log({
  sum1, 
  sum2,
  sum3: countSumOfNumberArr(numbers3),
  sum4: countSumOfNumberArr([5, 5, 5])
});
console.groupEnd();
console.log();





