const people1 = [{
  name: 'Sally',
  surname: 'Jolly',
  age: 20,
  weight: 60,
  height: 172,
  married: false,
  sex: 'Woman',
}, {
  name: 'John',
  surname: 'Stevens',
  age: 67,
  weight: 80,
  height: 172,
  married: true,
  sex: 'Man',
}, {
  name: 'Marrie',
  surname: 'Alexander',
  age: 16,
  weight: 50,
  height: 157,
  married: false,
  sex: 'Woman',
}];

const people2 = [{
  name: 'Jonny',
  surname: 'Lagend',
  age: 25,
  weight: 85,
  height: 183,
  married: false,
  sex: 'Man',
}, {
  name: 'Jack',
  surname: 'LeBlanc',
  age: 36,
  weight: 90,
  height: 181,
  married: true,
  sex: 'Man',
}, {
  name: 'Sofie',
  surname: 'LeBlanc',
  age: 38,
  weight: 71,
  height: 168,
  married: true,
  sex: 'Woman',
}];

// Please do these exercises and execute them using <people1> and <people2> arrays

console.group('1. Write a function, that takes people array and PRINTS their fullnames');
function printFullNames(people) {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].name, people[i].surname);
  }
}

console.group('people1 fullnames');
printFullNames(people1);
console.groupEnd();
console.log();

console.group('people2 fullnames');
printFullNames(people2);
console.groupEnd();

console.groupEnd();
console.log();
// ----------------------------------------------------------------------------------------

console.group('2. Write a function, that takes people array and PRINTS their age average');
// ...code
console.groupEnd();
console.log();
// ----------------------------------------------------------------------------------------

console.group('3. Write a function, that takes people array and PRINTS married people count');
// ...code
console.groupEnd();
console.log();
// ----------------------------------------------------------------------------------------

console.group('4. Write a function, that takes people array and RETUNRS married people count');
function countMarriedPeople(people) {
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].married) count++;
  }
  return count;
}
const people1MarriedPeopleCount = countMarriedPeople(people1);

console.log({
  people1MarriedPeopleCount,
  people2MarriedPeopleCount: countMarriedPeople(people2)
});

console.groupEnd();
console.log();
// ----------------------------------------------------------------------------------------

console.group('5. Write a function, that takes people array and RETUNRS children count');
function countChldrenPeople(people) {
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].age < 18) count++;
  }
  return count;
}

console.log({
  people1ChildrenCount: countChldrenPeople(people1),
  people2ChildrenCount: countChldrenPeople(people2),
});
console.groupEnd();
console.log();
// ----------------------------------------------------------------------------------------

console.group('6. Write a function, that takes people array and RETUNRS senior count');
function countSeniors(people) {
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 65) count++;
  }
  return count;
}

console.log({
  people1SeniorCount: countSeniors(people1),
  people2SeniorCount: countSeniors(people2),
});
console.groupEnd();
console.log();
// ----------------------------------------------------------------------------------------
