/*
1. Naudodami DVIEJŲ narių operatorius sudarykite skaičius:
  6, 8, 121, 168, 174, 65, 39, 47
2. Naudodami VIENO narių operatorius sudarykite skaičius:
  6, 8, 121, 168, 174, 65, 39, 47

  USE ONLY VARIABLES; a, b, c, d, e, f, g; 
*/

let
  a = 1,
  b = 2,
  c = 3,
  d = 5,
  e = 7,
  f = 11,
  g = 13;

// Example 2 operands
{
  const var99 = f ** 2 - c * e - a;
  console.log(var99)
}
// Example 1 operand
{
  let var99 = e; // 7
  var99 *= g; // 91
  var99 += e; // 98
  var99 += a; // 99
  console.log(var99);
}
