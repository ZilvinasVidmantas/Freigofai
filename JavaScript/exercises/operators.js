console.group('Naudodami dviejų narių operatorius:');
{
  console.group('1. Suformuokite skaičių 7 iš skaičių 2 ir 5');
  const x = 2 + 5;
  console.log(x);
  console.groupEnd();

  console.group('2. Suformuokite skaičių 2 iš skaičių 7, 6 ir 1');
  const y = 7 % 6 + 1;
  // const y = 7 - 6 + 1;
  console.log(y);
  console.groupEnd();

  console.group('3. Suformuokite skaičių 11 iš skaičių 10, 20 ir 9');
  const a = 20 / 10 + 9;
  console.log(a);
  console.groupEnd();

  console.group('4. Suformuokite skaičių 77 iš skaičių 13, 2 ir 7');
  const b = (13 - 2) * 7;
  console.log(b);
  console.groupEnd();

  console.group('5. Suformuokite skaičių 97 iš skaičių 5, 2 ir 51');
  const c = 51 * 2 - 5;
  console.log(c);
  console.groupEnd();
}
console.groupEnd();


console.group('Naudodami vieno nario operatorius:');
{
  console.group('6. Suformuokite skaičių 7 iš skaičių 2 ir 5');
  let x = 2;
  x += 5;
  console.log(x);
  console.groupEnd();

  console.group('7. Suformuokite skaičių 2 iš skaičių 7, 6 ir 1');
  // code...
  console.groupEnd();

  console.group('8. Suformuokite skaičių 11 iš skaičių 10, 20 ir 9');
  let a = 20;
  a /= 10;
  a += 9;
  console.log(a);
  // code...
  console.groupEnd();

  console.group('9. Suformuokite skaičių 77 iš skaičių 13, 2 ir 7');
  // code...
  console.groupEnd();

  console.group('10. Suformuokite skaičių 97 iš skaičių 5, 2 ir 51');
  // code...
  console.groupEnd();

}
console.groupEnd();
