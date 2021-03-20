console.group('Operatoriai');
{
  console.group('Dviejų narių operatoriai');
  {
    let x = 4, y = 2, res;
    console.log('x:', x, 'y:', y);
    res = x + y; console.log('x + y:', res); // Sudėtis
    res = x - y; console.log('x - y:', res); // Atimtis
    res = x * y; console.log('x * y:', res); // Daugyba
    res = x / y; console.log('x / y:', res); // Dalyba
    res = x % y; console.log('x % y:', res); // Liekana
    res = x ** y; console.log('x ** y:', res); // Laipsnis
    res = x ** (1 / y); console.log('x ** (1 / y):', res); // Šaknis
  }
  console.groupEnd();

  console.group('Vieno nario operatoriai');
  {
    let c = 5;
    console.log('c:', c);
    console.log('c++', c++); // Įvykdyti komandą, tuomet padidinti vienetu
    console.log('++c', ++c); // Padidinti vienetu, tuomet įvykdyti komandą
    console.log('c--', c--); // Įvykdyti komandą, tuomet sumažinti vienetu
    console.log('--c', --c); // Sumažinti vienetu, tuomet įvykdyti komandą
    c += 2; console.log('c += 2; c:', c); // Prie esamos c kintamojo vertės pridėti 2 ir priskirti į tą patį kintamajį c;
    c -= 2; console.log('c -= 2; c:', c); // Iš esamos c vertės atimti 2 ir priskirti į tą patį kintamajį c;
    c *= 2; console.log('c *= 2; c:', c); // Esamą c vertę padauginti iš 2 ir priskirti į tą patį kintamajį c;
    c /= 2; console.log('c /= 2; c:', c); // Esamą c vertę padalinti iš dviejų ir priskirti į tą patį kintamajį c;
    c %= 2; console.log('c %= 2; c:', c); // Suskaičiuoti esamos c vertės liekaną iš 2 ir priskirti į tą patį kintamajį c;
  }
  console.groupEnd();

  console.group('Loginiai operatoriai');
  {
    console.group('Lygybės ir nelygybės');
    {
      let
        lijoUzvakar = true,
        lijoVakar = false,
        uzvakarTemp = '5',
        vakarTemp = 5,
        siandienTemp = 3;
      console.log({ lijoUzvakar, lijoVakar, uzvakarTemp, vakarTemp, siandienTemp });
      console.log('užvakar > vakar', uzvakarTemp > vakarTemp); // Daugiau
      console.log('užvakar >= vakar', uzvakarTemp >= vakarTemp); // Daugiau arba lygu
      console.log('užvakar < vakar', uzvakarTemp < vakarTemp); // Mažiau
      console.log('užvakar <= vakar', uzvakarTemp <= vakarTemp); // Mažiau arba lygu
      console.log('užvakar == vakar', uzvakarTemp == vakarTemp); // Atlaidi lygybė, gali nesutapti duomenų tipas, bet turi sutapt reikšmė
      console.log('užvakar === vakar', uzvakarTemp === vakarTemp); // Griežta lygybė, privalo sutapti ir duomenų tipas ir reikšmė.
      console.log('lijoUzvakar', lijoUzvakar);
      console.log('!lijoUzvakar', !lijoUzvakar); // Salygos inversija
    }
    console.groupEnd();

    console.group('Sudėtinės salygos');
    {
      console.group('And operatorius, loginė sandauga.');
      {
        console.log('true && true:', true && true); //     1 * 1 = 1
        console.log('true && false:', true && false); //   1 * 0 = 0
        console.log('false && true:', false && true); //   0 * 1 = 0
        console.log('false && false:', false && false); // 0 * 0 = 0
      }
      console.groupEnd();

      console.group('OR operatorius, loginė sudėtis.');
      {
        console.log('true || true:', true || true); //     1 + 1 = 2
        console.log('true || false:', true || false); //   1 + 0 = 1
        console.log('false || true:', false || true); //   0 + 1 = 1
        console.log('false || false:', false || false); // 0 + 0 = 0
      }
      console.groupEnd();
    }
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();