console.group('Create objects, which define your family members, containing properties: name, surname, age, height, weight');
const father = {
  name: 'Žilvinas',
  surname: 'Vidmantas',
  age: 47,
  height: 180,
  weight: 110
};
const mother = {
  name: 'Erika',
  surname: 'Vidmantė',
  age: 47,
  height: 160,
  weight: 80
};
const me = {
  name: 'Žilvinas',
  surname: 'Vidmantas',
  age: 27,
  height: 182,
  weight: 98
};
const elderSister = {
  name: 'Eglė',
  surname: 'Vidmantaitė',
  age: 29,
  height: 162,
  weight: 62
};
const youngerSister = {
  name: 'Laura',
  surname: 'Vidmantaitė',
  age: 22,
  height: 162,
  weight: 58
};
const stepSister = {
  name: 'Ieva',
  surname: 'Danilovaitė',
  age: 6,
  height: 95,
  weight: 31
};
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each family member age');
console.log(father.age)
console.log(mother.age)
console.log(me.age)
console.log(elderSister.age)
console.log(youngerSister.age)
console.log(stepSister.age)
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each family member height');
console.log(father.height)
console.log(mother.height)
console.log(me.height)
console.log(elderSister.height)
console.log(youngerSister.height)
console.log(stepSister.height)
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each family member weight');
console.log(father.weight)
console.log(mother.weight)
console.log(me.weight)
console.log(elderSister.weight)
console.log(youngerSister.weight)
console.log(stepSister.weight)
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each family member name and surname seperated by and empty space');
console.log(father.name + ' ' + father.surname);
console.log(mother.name + ' ' + mother.surname);
console.log(me.name + ' ' + me.surname);
console.log(elderSister.name + ' ' + elderSister.surname);
console.log(youngerSister.name + ' ' + youngerSister.surname);
console.log(stepSister.name + ' ' + stepSister.surname);
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each families average age');
const ageAvg = (father.age + mother.age + me.age + youngerSister.age + elderSister.age + stepSister.age) / 6;
console.log(ageAvg);
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each families average height');
const heightAvg = (father.height + mother.height + me.height + youngerSister.height + elderSister.height + stepSister.height) / 6;
console.log(heightAvg);
console.groupEnd();

// -----------------------------------------------------------------------------------

console.group('Print each families average weight');
const weightAvg = (father.weight + mother.weight + me.weight + youngerSister.weight + elderSister.weight + stepSister.weight) / 6;
console.log(weightAvg);
console.groupEnd();

