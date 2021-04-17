console.group('1. Create else-if selective block to say a greeting based on the time of day');
{
  const now = new Date();
  const hour = now.getHours();
  console.log(hour);
  // ...code
}
console.groupEnd();

const allApples = [{
  type: 'Red love',
  weight: 80.2
}, {
  type: 'Ambrosia',
  weight: 70.2
}, {
  type: 'Opal',
  weight: 90.2
}, {
  type: 'Golden',
  weight: 85.2
}, {
  type: 'Cortland',
  weight: 87.2
}, {
  type: 'Red love',
  weight: 88.2
}, {
  type: 'Ambrosia',
  weight: 86.2
}, {
  type: 'Opal',
  weight: 80.8
}, {
  type: 'Golden',
  weight: 60.2
}, {
  type: 'Cortland',
  weight: 89.2
}, {
  type: 'Red love',
  weight: 81.2
}, {
  type: 'Ambrosia',
  weight: 82.2
}, {
  type: 'Opal',
  weight: 83.2
}, {
  type: 'Golden',
  weight: 80.5
}, {
  type: 'Cortland',
  weight: 80.6
}, {
  type: 'Red love',
  weight: 80.9
}, {
  type: 'Ambrosia',
  weight: 80.8
}, {
  type: 'Opal',
  weight: 80.7
}, {
  type: 'Golden',
  weight: 80.7
}, {
  type: 'Cortland',
  weight: 80.7
}];

console.group('2. Create an switch block to place apples in diferent arrays based on their type');
const redLoveApples = [];
const ambrosiaApples = [];
const opalApples = [];
const goldenApples = [];
const cortlandApples = [];

allApples.forEach(oneApple => {
  switch (oneApple.type) {
    case 'Red love': redLoveApples.push(oneApple); break;
    case 'Ambrosia': ambrosiaApples.push(oneApple); break;
    case 'Opal': opalApples.push(oneApple); break;
    case 'Golden': goldenApples.push(oneApple); break;
    case 'Cortland': cortlandApples.push(oneApple); break;
  }
});
console.log({
  redLoveApples,
  ambrosiaApples,
  opalApples,
  goldenApples,
  cortlandApples
});
console.groupEnd();

console.group('3. Create an switch block to count their total weight based on their type');
let redLoveApplesWeight = 0;
let ambrosiaApplesWeight = 0;
let opalApplesWeight = 0;
let goldenApplesWeight = 0;
let cortlandApplesWeight = 0;
allApples.forEach(oneApple => {
  switch (oneApple.type) {
    case 'Red love': redLoveApplesWeight += oneApple.weight; break;
    case 'Ambrosia': ambrosiaApplesWeight += oneApple.weight; break;
    case 'Opal': opalApplesWeight += oneApple.weight; break;
    case 'Golden': goldenApplesWeight += oneApple.weight; break;
    case 'Cortland': cortlandApplesWeight += oneApple.weight; break;
  }
});
console.log({
  redLoveApplesWeight,
  ambrosiaApplesWeight,
  opalApplesWeight,
  goldenApplesWeight,
  cortlandApplesWeight
})
console.groupEnd();

console.group('4. Create an switch block to calculate average weight of each apple type');

// ... code
console.groupEnd();

