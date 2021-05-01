// sum: https://www.youtube.com/watch?v=7C98Yt4egoE&ab_channel=ProgramCode
// average: youtube.com/watch?v=QgUnJhUTGoI&ab_channel=CalebCurry
// 
const cars = [{
  brand: 'Opel',
  model: 'Astra',   // cars[0]
  year: 2005,
  price: 1300
}, {
  brand: 'Opel',
  model: 'Astra',   // cars[1]
  year: 2011,
  price: 9000
}, {
  brand: 'Opel',
  model: 'Zefyra',  // cars[2]
  year: 2010,
  price: 3300
}, {
  brand: 'BMW',
  model: 'X5',      // cars[3]
  year: 2016,
  price: 16000
}, {
  brand: 'Subaru',  
  model: 'Impreza', // cars[4]
  year: 2008,
  price: 8500
}];

// cars.length = 5

console.group('1. Print all car brands and models by row');
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].brand, cars[i].model);
}
console.groupEnd();
console.log();

console.group('2. Sum car prices');
let sum = 0;
for (let i = 0; i < cars.length; i++) {
  sum += cars[i].price;
}
console.log(sum);
console.groupEnd();
console.log();

console.group('3. Count average price of all cars');
const avg = sum / cars.length;
console.log(avg);
console.groupEnd();
console.log();

console.group('4. Count price sum of all cars which brand is "Opel"');
let sumOpel = 0;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].brand === 'Opel') {
    sumOpel += cars[i].price;
  }
}
console.log(sumOpel);
console.groupEnd();
console.log();

console.group('5. Count average of all cars which brand is NOT "Opel"');
let sumNotOpel = 0;
let countNotOpel = 0;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].brand !== 'Opel') {
    sumNotOpel += cars[i].price;
    countNotOpel++;
  }
}
const notOpelAvg = sumNotOpel / countNotOpel;
console.log(notOpelAvg);
console.groupEnd();
console.log();

console.group('6. Count sum of all cars which are older than 2010');
let sumFromYear2010 = 0;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year > 2010) {
    sumFromYear2010 += cars[i].price;
  }
}
console.log(sumFromYear2010);
console.groupEnd();
console.log();

console.group('7. Count average of all cars which are newer than 2011 or is of year 2011');
let sumFromYear2011 = 0;
let countFromYear2011 = 0;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2011) {
    sumFromYear2011 += cars[i].price;
    countFromYear2011++;
  }
}
const avgFromYear2011 = sumFromYear2011 /countFromYear2011;
console.log(avgFromYear2011);
console.groupEnd();
console.log();