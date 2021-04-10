console.group('Write any dialogue, in which at least 2 "if-else conditions" are used');
// code...
console.groupEnd();

console.group('Write a short dialogue, in which "if condition" is used');
// code...
console.groupEnd();
console.group('Finish the logic')
console.log('Grandmother: Hey Silvesr, can you please help me with the groceries?');
console.log('Silvester: Sure thing, anything for my favorite grandma!');
console.log(
  `Grandmother: please put milk products in the fridge, if it's icecream, put it in the cooler,
  put other items on the table, I take care of them myself.`
);

const groceries = [
  { name: 'Icecream', category: 'Milk products' },
  { name: 'Milk', category: 'Milk products' },
  { name: 'Apples', category: 'Fruits' },
  { name: 'Bread', category: 'Grain products' },
];
const table = [];
const fridge = {
  cooler: [],
  mainSection: []
};
console.groupEnd();
