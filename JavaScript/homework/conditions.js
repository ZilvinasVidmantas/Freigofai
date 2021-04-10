// Watch video: https://www.youtube.com/watch?v=_5SgikgFf0U&ab_channel=DevEd
/*
  Samuel has unknown number of apples and unknown number of oranges
  Jessica also has unknown numbers of apples and oranges
  Using if or if-else conditions trade apples and oranges between Samuel and Jessica,
  so after the trade they would have same amount of fruits.
  You should not try to equalize fruits, if they are already equal
*/

const samuel = {
  apples: 9, // this can be any number
  oranges: 6, // this can be any number
};

const jessica = {
  apples: 9, // this can be any number
  oranges: 7, // this can be any number
};

// code...

if (samuel.apples === jessica.apples && samuel.oranges === jessica.oranges) {
  console.log('Congratz, you are smart!');
} else {
  console.log('Not yet, keep it up!');
}

