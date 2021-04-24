/*
  Cycle is a directive, that checks the condition:
    If condition is true: then it execudes the cycle code block, and checks the condition again.
    If conditions is false: it does not execute the code block, and executes code below the cycle code block
  All cycle types have there rules:
    1. It must have a conditions, which is changable by the cycle code block
    2. All cycles have a 'worker' type variables which must change after every code block execution
    3. The 'worker' variable must change to, that it uproaches a false condition, and the cycle stops.
  If you will not fallow these steps, your cycle can be infinite, resulting in a program crash.
 */
// Example:
let i = 0; // this is a 'worker' variable, which must participate in the condition
//       ↙ - this is condition, which is tested before every iteration
while(i < 10){
  console.log('The worker variable is:', i);
  // This parts is crucial! we change 'worker' variable which inflicts the condition so, 
  // that it aproaches final condition (in this case <while(10 < 10)> → false)
  i++; 
}
console.log('Cycle ended. Worker variable is:', i);
