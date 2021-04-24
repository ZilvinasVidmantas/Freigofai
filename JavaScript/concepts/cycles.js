/*
  Cycle is a directive, that checks the condition:
    If condition is true: then it execudes the cycle code block, and checks the condition again.
    If conditions is false: it does not execute the code block, and executes code below the cycle code block.
  All cycle types have there rules:
    1. It must have a condition, which is changable by the cycle code block
    2. All cycles have a 'worker' type variables which must change after every code block execution.
    3. The 'worker' variable must change so, that it uproaches a final false condition, and the cycle stops.
  If you will not fallow these steps, your cycle can be infinite, resulting in a program crash.
 */
// Example:
console.group('Simple iteration with "while" cycle');
let i = 0; // this is a 'worker' variable, which must participate in the condition
//       ↙ - this is condition, which is tested before every iteration
while (i < 10) {
  console.log('The worker variable is:', i);
  // This parts is crucial! we change 'worker'(step) variable which alters the condition so, 
  // that it aproaches final condition 
  // in this case final condition is: "while(10 < 10)" → results in → false

  i++; // step
}
console.log('Cycle ended. Worker variable is:', i);
console.groupEnd();
console.log();
/*
  Termynology:
    iterator - cycle's 'worker' variable.
    iteration - cycle's code block which executes.
    iterate - execute cycle's code blocks.
    cycle's condition - condition which is tested before every cycle's iteration
    final condition - condition which results in → false
    step - 'worker'(iterator) variable variation, which leads to final condition
  
  Directives:
    There are some special directives, which only work in cycle code block:
      break - terminate cycle's proccess, and does not check the condition
      continue - stops cycle's current single iteration, and checks the condition for further execution
*/
console.group('"break" example');
let m = 0;
while (true) {
  if (m > 10) break;
  console.log(m++);
}
console.log('Cycle ended. Worker variable is:', m);
console.groupEnd();
console.log();

console.group('"continue" example');
let v = 0;
while (v < 11) {
  if (v % 2 !== 0) {
    v++;
    continue;
  }
  console.log(v++);
}
console.log('Cycle ended. Worker variable is:', m);
console.groupEnd();
console.log();

// You can always use while cycle, but there other cycles types
// Most famous one is "for cycle".
// It is more commonly used becouse it has it's one scope, and has implementation of all cycle requirements:
//  1. initial iterator(worker variable) value assignment 
//  2. cycle's contition
//  3. step (which approches final condition)
// for( [1.]; [2.]; [3.]) {... iteration code ...}

console.group('"for cycle" example');
//        ↙ 1.    ↙ 2.   ↙ 3.
for (let i = 1; i <= 10; i++) {
  console.log('iterator:', i)
}
console.groupEnd();
console.log();

/*
  Cycles are core tools of all algorithms. Most commonly used is iteration thourgh every element of an array
    arr.length - is array property which tells us how many elements is in an array.
    By using the arr.length value we can write condition so, that cycle stops, when is
      iterator reached same value as the arr.length value.
    Because array elements are indexed from 0, we initialize the iterator as value 0.
    That way we will always iterate through every array element despite the element count.
    This might seem like magic, but it is just a synonym for cleverness :)
*/
const numbers = [1, 3, 5, -6, 7, 9]; // Feel free to change array elements, and their count
console.group('Printing array elements with "for cycle"');
for (let i = 0; i < numbers.length; i++) {
  console.log(`iterator: ${i}; array value by iterator index, numbers[${i}]: ${numbers[i]}`);
}
console.groupEnd();
console.log();
/*
  Well, iterating thourgh arrays opens a lot of algorythms, for instance, the sum of all array elements:
*/
console.group('Sum of "numbers"');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('sum:', sum);
console.groupEnd();
console.log();

console.group('Average of "numbers"');
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
const avg = total / numbers.length;
console.log('avg:', avg);
console.groupEnd();
console.log();
