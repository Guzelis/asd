/* Generuojamas skaicius nuo  iki 99
1 kategorija 0 <= skaicius <= 10 pakleti kvadratu ir atsspausdinti
2 kategorija 10 < skaicius < 20 atspasdinti toks koks yra
3 kategorija 20 <= skaicius < 49 ir skaicius yra lyginis. skaiciu desimtis atimti is paties skaiciaus ir atspausdinti
4 ketegorija 20 <= skaicius < 50 ir skaicius nera lyginis . skaiciau vienetus prideti prie paties skaiciaus ir padalinti is dvieju atpausdinti
5 kategorija 50 <= skaicius ir skaicius dalinasi is triju be liekanos
visais kitais atvejais skaicius netinka ne vienai kategorijai
*/

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numb = rand(0, 99);

console.log("\n");

//1

if (numb >= 0 && numb <= 10) {
  let rez = numb ** 2;
  console.log(`Skaicius: ${numb}, Kategorija: 1, Rezultatas: ${rez}`);
}

//2
else if (numb > 10 && numb < 20) {
  console.log(`Skaicius: ${numb}, Kategorija: 2, Rezultatas: ${numb}`);
}

//3
else if (numb >= 20 && numb < 49 && numb % 2 === 0) {
  let firstAction = +numb.toString()[0];
  let rez = numb + firstAction / 2;
  console.log(`Skaicius: ${numb}, Kategorija: 3, Rezultatas: ${rez}`);
}

//4
else if (numb >= 20 && numb < 50 && numb % 2 !== 0) {
  let firstAction = +numb.toString()[1]; //let firstAction = numb % 10
  let rez = (firstAction + numb) / 2;
  console.log(`Skaicius: ${numb}, Kategorija: 4, Rezultatas: ${rez}`);
}

//5
else if (numb >= 50 && numb % 3 === 0) {
  let a = rand(110, 120),
    b = rand(97, 122),
    c = rand(97, 122),
    d = rand(98, 120);
  let string = String.fromCharCode(a, b, c, d);

  console.log(`Skaicius: ${numb}, Kategorija: 5, Rezultatas: ${string}`);
} else {
  console.log(`Skaicius ${numb}, nepriklauso nei vienai kategorijai`);
}
