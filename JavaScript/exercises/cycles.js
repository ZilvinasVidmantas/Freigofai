console.group('1. Write a "while" cycle which prints numbers one to twenty.');
let i = 1;
// while (i <= 20) {
while (i < 21) {
  console.log(i);
  i++;
  // i += 1; Same as i++
  // i =  i + 1; Same as i++
}

console.groupEnd();
console.log();

console.group('2. Write a "while" cycle which prints even numbers one to twenty.')
let y = 1;
// If the remainder of <y> devided by 2 is not 0, we increase <y> value by 1
// in simple terms: if <y> is odd, we increase <y> by 1
if (y % 2 !== 0) y++;
// this method is more efficient because it only executes iterations with even numbers
while (y <= 20) {
  console.log(y);
  y += 2;
}
console.groupEnd();
console.log();

console.group('3. Write a "while" cycle which prints odd numbers one to twenty.')
let z = 1;
// If the remainder of <y> devided by 2 is not 0, we increase <y> value by 1
// in simple terms: if <y> is odd, we increase <y> by 1
if (z % 2 === 0) z++;
// this method is more efficient because it only executes iterations with even numbers
while (z <= 20) {
  console.log(z);
  z += 2;
}
console.groupEnd();
console.log();

console.group('4. Write a "while" cycle which prints numbers twenty to one.')
let m = 20;
while (m > 0) {
  console.log(m);
  m--;
}
console.groupEnd();
console.log();

console.group('5. Write a "while" cycle which prints even numbers twenty to one.')
let x = 20;
while (x > 0) {
  console.log(x);
  x -= 2;
}
console.groupEnd();
console.log();

console.group('6. Write a "while" cycle which prints odd numbers twenty to one.')
let n = 19;
while (n > 0) {
  console.log(n);
  n -= 2;
}
console.groupEnd();
console.log();

console.group('Please do 1-6 tasks using "for cycle".');