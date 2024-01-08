function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numb = rand(0, 99);

/*Sąlyga: Generuojamas skaičius tarp 0 ir 99;
Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
*/

if (numb < 10) {
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

console.log("\n");

/*Antras variantas

Kategorija 1: 0 – 5. skaičius dauginamas iš 3
Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4
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

console.log("\n");

//2 Atstumas tarp automobilių lygus s0 km. Jie vienu metu pradeda važiuoti. Antrasis automobilis vejasi pirmąjį. Automobilių greičiai  v1 ir v2 km/h - sveikieji skaičiai. Parašykite programą, kuri apskaičiuotų atstumą s tarp automobilių po t valandų ir apibūdintų situaciją (niekada nepavys, aplenkė, pavys, pasivijo).
//Pvz.: s0 = 200, v1 = 80, v2 = 50, t = 2, s = 260 km. Niekada nepavys;
//s0 = 20, v1 = 70, v2 = 80, t = 3, s = 10 km. Aplenkė.

let sNulinis = rand(0, 99);
console.log(`pradinis atstumas- ${sNulinis}`);
let vVienas = rand(0, 99);
console.log(`pirmo automobilio greitis- ${vVienas}`);
let vDu = rand(0, 99);
console.log(`antro automobilio greitis- ${vDu}`);
let t = rand(0, 99);
console.log(`laikas- ${t}`);

//s0 = 200, v1 = 80, v2 = 50, t = 2, s = 260 km.
//260=200+160−100 st=s0+v1t−v2t

let s = sNulinis + vVienas * t - vDu * t;
console.log(`atstumas tarp automobiliu po ${t} valandu - ${s}`);
if (s < 0) {
  console.log(`aplenke`);
} else if (s === 0) {
  console.log(`pavijo`);
} else if (s > 0) {
  console.log(`niekada nepavys`);
}
console.log("\n");

//3 Skaičiai t1, t2, t3 reiškia vidutinę trijų iš eilės einančių dienų temperatūrą. Kelias dienas temperatūra buvo neigiama, o kelias - teigiama? Rezultatą išspausdinkite žodžiais. Šiuo atveju 0 skaitome, kaip teigiamą temperatūrą.
//Pvz.: t1 = 2, t2 = -5, t3 = 8, Rezultatas: Dvi dienas teigiama, vieną - neigiama.

let t1 = rand(-99, 99);
let t2 = rand(-99, 99);
let t3 = rand(-99, 99);

let countPlius = 0;
let countMinus = 0;
if (t1 < 0) countMinus++;
else if (t1 >= 0) countPlius++;
if (t2 < 0) countMinus++;
else if (t2 >= 0) countPlius++;
if (t3 < 0) countMinus++;
else if (t3 >= 0) countPlius++;
console.log(`teigiama - ${countPlius}`);
console.log(`neigiama - ${countMinus}`);
console.log(`Rezultatas: Dvi dienas teigiama, vieną - neigiama.`);
