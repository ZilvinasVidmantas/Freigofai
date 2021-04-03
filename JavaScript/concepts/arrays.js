console.group('Array');
{
  // Array is a collection of data.
  // Array elements are indexed starting from 0:
  //      values ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘ ↘  ↘
  let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
  // indexes:    0   1  2   3  4  5  6  7  8  9
  let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
  // indexes:     0       1         2         3      4        5       6    
  let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
  // indexes:     0       1     2      3     4    5     6     7  
  // ---- ---- ---- Usage of array values
  // Array value is accesed by it's index:
  console.log(numbers[3]); // 78
  console.log(nouns[2]); // hammer
  console.log(helpers[0]); // in
  // Array values are set also by index:
  nouns[2] = 'saw'; // value  'hammer' changed to 'saw'
  numbers[3] += 6; // current value at index 3 is increaced by 6; the new value is now 84 

  // !!! When applying complex algorithms indexes can be calculated !!!
  // ECT.:
  // arr.length - number of elements in the array
  // If array consists of 6 elements, and we know that elements are indexed from 0,
  // then index of the last element is on unit lower -which is this case is 5.
  // Therefore:
  numbers[numbers.length - 1]; // last element:
  numbers[numbers.length - 2]; // before last:
  numbers[Math.floor((numbers.length) / 2)] // middle element
  let i = 3, j = 4;
  numbers[i % 2 + j++]; // This example shows, that it is possible (rarely) to use complex calculations in array value access brackets.
}
console.groupEnd();