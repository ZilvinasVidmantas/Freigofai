console.group('Write any dialogue, in which at least 2 "if-else conditions" are used');
// code...
console.groupEnd();

console.group('Write a short dialogue, in which "if condition" is used');
// code...
console.groupEnd();

console.group('Finish the logic')
console.log('Grandmother: Hey Silver, can you please help me with the groceries?');
console.log('Silvester: Sure thing, anything for my favorite grandma!');
console.log(
  `Grandmother: please put milk products in the fridge, if it's Icecream, put it in the cooler,
  put other items on the table, I take care of them myself.`
);

// PLEASE LOOK AT THIS METHOD, FOR ADDING TO THE ARRAY
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const groceries = [
  { name: 'Icecream', category: 'Milk products' },
  { name: 'Milk', category: 'Milk products' },
  { name: 'Apples', category: 'Fruits' },
  { name: 'Bread', category: 'Grain products' },
];
const table = []; // put other items here
const fridge = {
  cooler: [], // put icecream here
  mainSection: [] // put milk products, which are not icecream here
};

// IF CODE BLOCK EXECUTED ONLY ONE COMMAND, THEN YOU CAN SKIP THE PARETHESES {}
if (groceries[0].category === 'Milk Products') {
  if (groceries[0].name === 'Icecream') fridge.cooler.push(groceries[0])
  else fridge.mainSection.push(groceries[0]);
}
else table.push(groceries[0]);

// Print table, and fridge objects
console.groupEnd();
