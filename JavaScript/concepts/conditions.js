// Conditions in programing is value testing, and code execution based on that value
// For Example:
const customerAge = 25;
const legalSmokingAgeLimit = 18;
const legalDrinkingAgeLimit = 20;

console.log(`Customer: Hello, I'd like to have some legal narcotics`);
console.log('Vendor: Can I see your Id card, please?');
console.log('Customer: Here you go');
console.log(`Vendor: As I see you are ${customerAge} of age ...`);
if (customerAge >= legalSmokingAgeLimit) {
  console.log('Vendor: What cigarettes do you want to have?')
} else {
  console.log('Vendor: Milk section is in another part of the store, young man');
}

if (customerAge >= legalDrinkingAgeLimit) {
  console.log('Vendor: What booze you want to buy?');
} else {
  console.log('Vendor: Please consider Coca-cola young fellow.')
}