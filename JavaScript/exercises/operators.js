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
  x += 5; // x = x + 5 = 2 + 5 = 7;
  console.log(x);
  console.groupEnd();

  console.group('7. Suformuokite skaičių 2 iš skaičių 7, 6 ir 1');
  let y = 7;
  y -= 6; // y = y - 6 = 7 - 6 = 1;
  y += 1; // y = y + 1 = 1 + 1 = 2
  console.log(y);
  console.groupEnd();

  console.group('8. Suformuokite skaičių 11 iš skaičių 10, 20 ir 9');
  let a = 20;
  a /= 10;
  a += 9;
  console.log(a);
  // code...
  console.groupEnd();

  console.group('9. Suformuokite skaičių 77 iš skaičių 13, 2 ir 7');
  let b = 13;
  b -= 2; // b = b - 2 = 13 - 2 = 11
  b *= 7; // b = b * 7 = 11 * 7 = 77
  console.log(b);
  console.groupEnd();

  console.group('10. Suformuokite skaičių 97 iš skaičių 5, 2 ir 51');
  let c = 2;
  c *= 51; // c = c * 51 = 2 * 51 = 102
  c -= 5; // c = c - 5 =  102 - 5 = 97
  console.log(c);
  console.groupEnd();

}
console.groupEnd();
