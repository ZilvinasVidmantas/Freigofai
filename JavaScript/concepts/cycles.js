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
