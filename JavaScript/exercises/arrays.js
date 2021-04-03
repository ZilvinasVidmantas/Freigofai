let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5, 50];
// indexes:     0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'year'];
// indexes:     0       1         2         3      4        5       6    
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'was'];
// indexes:      0      1      2     3     4    5     6     7
let adjectives = ['great', 'tasty'];
// Print out sentences using words from these arrays:
console.group('1. my sister is in the lake')
{
  const sentence = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
  //                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
  console.log(sentence);
}
console.groupEnd();


console.group('2. hammer is on the table');
{

}
console.groupEnd();

console.group('3. sun is in the sky');
{

}
console.groupEnd();

console.group('4. apple is with my sister');
{

}
console.groupEnd();

console.group('5. Papildyti masyvus žodžiais, ir sukurti dar 3 +-logiškus sakinius.');
{

}
console.groupEnd();
