function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numb = rand(0, 99);

/*if (numb < 10) {
  let rez = numb ** 2;
  console.log(
    `Skaičius - ${numb}, Kategorija 1, operacijos rezultatas: ${rez}`
  );
} else if (numb > 11 && numb < 19) {
  console.log(
    `Skaičius - ${numb}, Kategorija 2, operacijos rezultatas: ${numb}`
  );
} else if (numb > 20 && numb < 49 && numb % 2 === 0) {
  let first = +numb.toString()[0];
  let rez = numb - first;
  console.log(
    `Skaičius - ${numb}, Kategorija 3, operacijos rezultatas: ${rez}`
  );
} else if (numb > 20 && numb < 49 && numb % 2 !== 0) {
  let first = numb % 10;
  let rez = (numb + first) / 2;
  console.log(
    `Skaičius - ${numb}, Kategorija 4, operacijos rezultatas: ${rez}`
  );
} else if (numb >= 50 && numb % 3 !== 0) {
  let a = rand(110, 120),
    b = rand(97, 122),
    c = rand(97, 122),
    d = rand(98, 120);
  let string = String.fromCharCode(a, b, c, d);
  console.log(
    `Skaičius - ${numb}, Kategorija 4, operacijos rezultatas: ${string}`
  );
} else {
  console.log(`skaičius ${numb} netinkamas nei vienai kategorijai`);
}
*/

if (numb <= 5) {
  let rez = numb * 3;
  console.log(
    `Skaičius - ${numb}, Kategorija 1, operacijos rezultatas: ${rez}`
  );
} else if (numb >= 6 && numb <= 15) {
  let rez = (numb - 4) ** 2;
  console.log(
    `Skaičius - ${numb}, Kategorija 2, operacijos rezultatas: ${rez}`
  );
} else if (numb >= 16 && numb <= 30 && numb % 5 === 0) {
  let rez = numb + 10;
  console.log(
    `Skaičius - ${numb}, Kategorija 3, operacijos rezultatas: ${rez}`
  );
} else if (numb >= 31 && numb <= 45 && numb % 2 !== 0) {
  let rez = 100 - numb;
  console.log(
    `Skaičius - ${numb}, Kategorija 4, operacijos rezultatas: ${rez}`
  );
} else if (numb >= 46 && numb <= 99 && (numb % 10 === 6 || numb % 10 === 7)) {
  let rez = numb / 4;
  console.log(
    `Skaičius - ${numb}, Kategorija 5, operacijos rezultatas: ${rez}`
  );
} else {
  console.log(`Skaicius ${numb}, nepriklauso nei vienai kategorijai`);
}
