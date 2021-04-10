// Conditions in programing is value testing, and code execution based on that value
// For Example:
const customerAge = 25;
const legalSmokingAgeLimit = 18;
const legalDrinkingAgeLimit = 20;

console.log(`Customer: Hello, I'd like to have some legal narcotics.`);
console.log('Vendor: Can I see your Id card, please?');
console.log('Customer: Here you go!');
console.log(`Vendor: As I see you are ${customerAge} of age ...`);
if (customerAge >= legalSmokingAgeLimit) {
  console.log('Vendor: What cigarettes do you want to have?')
} else {
  console.log('Vendor: Milk section is in another part of the store, young man!');
}

if (customerAge >= legalDrinkingAgeLimit) {
  console.log('Vendor: What booze you want to buy?');
} else {
  console.log('Vendor: Please consider a Coca-cola can, young fellow.')
}

/* The first block is called the 'then' block, which refers what to do, if the condition is thuthy
    'then' block is a necessity, you can not have a condition without the 'then' block.
  You can add an 'else' block if your application logic requires it. Though it is not required.
  For example:
*/

const moneyInPocket = 1.29;
const costOfChocolateBar = 1.49;

if (moneyInPocket >= costOfChocolateBar) {
  console.log('Customer: Hello, can I have a Chocolate bar?');
  console.log(`Vendor: Sure Mate! That would be ${costOfChocolateBar}?`);
  console.log('Customer: Here you go.');
  console.log('Vendor: Happy colories!');
  console.log('Customer: Ha! Thanks. Bye!');
  console.log('Vendor: Good luck, come again!');
}
// Optional
else {
  console.log('Damn! I wish a have studied programing when I was young...')
}

/*
  Some times we have more complex logic and nested conditions are needed
  For example:
*/

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

