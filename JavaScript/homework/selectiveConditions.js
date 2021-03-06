// Please change variable values for testing else-if and switch statments,
// as marked in comments near properties or variables
const apartment = {
  indoorSquares: 60, // 40, 60, 80, 100, 150, 
  type: 'House', // 'House', 'Flat', 'Cottage'
  outdoorSquares: 0 // 0, 20, 60, 200
};
console.group('1. Create else-if selective conditions to console.log comment about <apartment> indoor squares');
// ... code
console.groupEnd();
console.group('2. Create else-if selective conditions to console.log comment about <apartment> outdoor squares');
// ... code
console.groupEnd();
console.group('3. Create switch selective conditions to console.log comment about <apartment> type');
// ... code
console.groupEnd();

const hundredMetersTimeInSeconds = 15; // 10 - ...
console.group('4. Create else-if selective conditions to console.log comment about <hundredMetersTimeInSeconds>');
// ... code
console.groupEnd();

const person = {
  name: 'Jacob', // Ann, Hamulatakin, Jesicalimanora
  weight: 90, // 60, 90, 120, 150
  height: 160, // 180, 190, 200, 210, 220
};
console.group('5. Create else-if selective conditions to console.log comment about <person> name length');
console.log('name length:', person.name.length)
if (person.name.length < 5) {
  console.log('You got a cool short name!')
} else if (person.name.length < 8) {
  console.log('Handsome letters in the name, mate!')
} else {
  console.log('Not a short name you have dare, sir.')
}
console.groupEnd();
console.group('6. Create else-if selective conditions to console.log comment about <person> name weight');
// ... code
console.groupEnd();
console.group('7. Create else-if selective conditions to console.log comment about <person> name height');
// ... code
console.groupEnd();
console.group('8. Create else-if selective conditions to console.log comment about <person> name BMI index');
// ... code
console.groupEnd();