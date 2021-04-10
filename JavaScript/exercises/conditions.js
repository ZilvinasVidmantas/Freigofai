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
  {  // ------------------------------------------------
    name: 'Icecream',  // groceries[0].name             |  groceries[0]
    category: 'Milk products' // groceries[0].category  |
  }, // ------------------------------------------------
  { name: 'Milk', category: 'Milk products' },  // groceries[1]
  { name: 'Apples', category: 'Fruits' }, // groceries[2]
  { name: 'Bread', category: 'Grain products' }, // groceries[3]
];
const table = []; // put other items here
const fridge = {
  cooler: [], // fridge.cooler
  mainSection: [] // fridge.mainSection
};


if (groceries[0].category === 'Milk Products') {
  if (groceries[0].name === 'Icecream') fridge.cooler.push(groceries[0])
  else fridge.mainSection.push(groceries[0]);
}
else table.push(groceries[0]);

if (groceries[1].category === 'Milk Products') {
  if (groceries[1].name === 'Icecream') fridge.cooler.push(groceries[1])
  else fridge.mainSection.push(groceries[1]);
}
else table.push(groceries[0]);

if (groceries[2].category === 'Milk Products') {
  if (groceries[2].name === 'Icecream') fridge.cooler.push(groceries[2])
  else fridge.mainSection.push(groceries[2]);
}
else table.push(groceries[0]);

if (groceries[3].category === 'Milk Products') {
  if (groceries[3].name === 'Icecream') fridge.cooler.push(groceries[3])
  else fridge.mainSection.push(groceries[3]);
}
else table.push(groceries[0]);


// Print table, and fridge objects
console.log({
  table,
  fridge
})
console.groupEnd();
