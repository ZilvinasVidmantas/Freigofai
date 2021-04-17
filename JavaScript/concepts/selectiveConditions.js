/*
  Selective conditions is when you execute one of many code blocks,
  That means if some conditions is met, other conditions are not tested
*/

console.group('if-else');
const age = 17;

if (age < 0) {
  console.log('Please get born first!');  // < 0
} else if (age < 3) {
  console.log('Please learn to speak properly'); // 0 - 2.9(9)
} else if (age < 7) {
  console.log('You should get ready for school'); // 3 - 6.9(9)
} else if (age < 14) {
  console.log('This is perfect time to learn languages'); // 7 - 13.9(9)
} else if (age < 19) {
  console.log('This is perfect time, to increase your social skills');  // 14 - 18.9(9)
} else if (age < 26) {
  console.log('This is perfect time to study hard and travel'); // 19 - 25.9(9)
} else if (age < 35) {
  console.log('This is perfect time to excel at your career, and marry someone.'); // 19 - 25.9(9)
} else if (age < 45) {
  console.log('This is perfect time to concentrate on your family');
} else if (age < 60) {
  console.log('This is perfect time to make buisness');
} else if (age < 80) {
  console.log('This is perfect time to pass your knowledge');
} else {
  console.log('This is perfect time to become a professional Vampire'); // if none of the conditions were met
}
console.groupEnd();

console.group('switch');
const now = new Date();
const weekDay = now.getDay();
switch (weekDay) {
  case 0: console.log('Today is Sunday!'); break;
  case 1: console.log('Today is Monday!'); break;
  case 2: console.log('Today is Tuesday!'); break;
  case 3: console.log('Today is Wednesday!'); break;
  case 4: console.log('Today is Thursay!'); break;
  case 5: console.log('Today is Friday!'); break;
  case 6: console.log('Today is Saturday!'); break;
  default: console.log('Get back to Mars you Alien!!!');
}
console.groupEnd();