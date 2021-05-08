// Do these tasks and show their correctness by calling them with different arguments like in example of first task.
// Every function should be tested with atleast 2 function calls
//  * One of the function calls must have it's argument(s) passed by value
//  ** One of the function calls must have it's argument(s) passed bu variable
console.group("1. Create function 'triple', which multiplies parameter by 3");
function triple(x) {
  return x * 3;
}
console.group("1.1 triple(7)");
const res1 = triple(7);
console.log(res1);
console.groupEnd();

console.group("1.2 triple(3)");
const z = 3;
console.log(triple(z));
console.groupEnd();

console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("2. Create function 'square', which returns a square of a number.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("3. Create function 'add', which adds 2 numbers.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("4. Create function 'mul', which multiplies 2 numbers.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("5. Create function 'pow', which raises base number by power (2 parameters).");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("6. Create function 'root', which retuns nth root of a number.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("7. Create function 'squareArea', which return rectangle area.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("8. Create function 'volume', which return volume of a cuboid.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("9. Create function 'arrayDouble' which takes and array and returns new array with values doubled.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("10. Create function 'arrayPower' which takes and array and returns new array width values raised by given power.");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("11. Create function which takes an array and print values in this format: [0] => 64.  ");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("12. Create function which takes an array and returns sum of all elements");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("13. Create function which takes an array and returns average of all elements");
// ... code
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("14. Create function which takes an array and returns biggest value in the array.");
const numbers1 = [1, -8, 9, -6, -9, 8, 7];
const numbers2 = [-112, -54, -66, -32, -47, -9];
function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log({
  ['Max in: ' + JSON.stringify(numbers1)]: max(numbers1),
  ['Max in: ' + JSON.stringify(numbers2)]: max(numbers2),
});
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------

console.group("15. Create function which takes an array and returns smallest value in the array.");
function min(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log({
  ['Min in: ' + JSON.stringify(numbers1)]: min(numbers1),
  ['Min in: ' + JSON.stringify(numbers2)]: min(numbers2),
});
console.groupEnd();
console.log();
// -----------------------------------------------------------------------------------------
