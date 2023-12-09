/*1.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
2.Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
3.Sukurkite 2 kintamuosius. Jiems priskirkite vartotojo vardą ir pavardę. Sukurti trečią kintamąjį ‘inicialai’ sudarytą iš dviejų pirmųjų vardo ir pavardės raidžių.
4.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
5.Sukurti kintamąjį data ir priskirti jai datos reikšmę tokiu formatu: YYYY-MM-DD, pvz: 2023-11-07. sukurkite programą, kuri pasiima mėnesio reikšmę ir atspausdina gauto mėnesio pavadinimą.
6.Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
7.Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
 8.Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
9.Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
  10.Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis: 3 simboliai.
 11.Duotas tekstas, kuriame yra išimti pasikartojantys raktiniai žodžiai ir pakeisti šabloninėmis reikšmėmis. Užduotis: pakeiskite visas šablonines reikšmes pagal pateiktas reikšmes:
planet – earth
star – Sun
age –  4.54 billion years
satellite –  moon
"The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite."
12.Pasinaudodami jau pateikta rand funkcija, sukurkite kitą funkciją, kuri sugeneruoja atsitiktinį skaičių nuo minimalios iki maksimalios reikšmės su dviem skaitmenimis po kablelio.

13.Užduotis stipruoliams:
Sukurti du kintamuosius a = 5 bei b = 20; Nepasinaudojant trečiu kintamuoju, apkeisti šių dviejų kintamųjų reikšmes vietomis;
*/

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1

let firstName = "Al",
  lastName = "Pacino";

if (firstName.length > lastName.length) {
  console.log(lastName);
} else {
  firstName.length < lastName.length;
  console.log(firstName);
}

console.log("\n");

//2

let myName = "Mantvydas",
  myLastName = "Guzas",
  birthDate = "1987",
  thisYear = "2023";

// console.log("Aš" + " " + "esu" + " " +  myName + " " + myLastName + "." + " " + "Man" + " " + "yra" + " " + (thisYear - birthDate) + " " + "metai(ų)" + "." );

console.log(
  `Aš esu ${myName} ${myLastName}. Man yra ${thisYear - birthDate} metai(ų)`
);

console.log("\n");

//3

let userName = "Joe",
  userId = "Rogan",
  userInicials = userName[0] + userName[1] + userId[0] + userId[1];

console.log(userInicials);

console.log("\n");

//4

let title = "Steven",
  registration = "Seagal",
  titleRegistration =
    title[3] +
    title[4] +
    title[5] +
    registration[3] +
    registration[4] +
    registration[5];

console.log(titleRegistration);

console.log("\n");

//5

let date = "2023-06-23";

if (date[5] + date[6] === 1) {
  console.log("January");
}
if (date[5] + date[6] === 2) {
  console.log("February");
}
if (date[5] + date[6] === 3) {
  console.log("March");
}
if (date[5] + date[6] === 4) {
  console.log("April");
}
if (date[5] + date[6] === 5) {
  console.log("May");
}
if (date[5] + date[6] === 6) {
  console.log("June");
}
if (date[5] + date[6] === 7) {
  console.log("July");
}
if (date[5] + date[6] === 8) {
  console.log("August");
}
if (date[5] + date[6] === 9) {
  console.log("September");
}
if (date[5] + date[6] === 10) {
  console.log("October");
}
if (date[5] + date[6] === 11) {
  console.log("November");
}
if (date[5] + date[6] === 12) {
  console.log("December");
}

console.log("\n");

//6

let a = "Once upon a time in hollywood";

//let b = a.replaceAll("O", "*").replaceAll("o", "*");

//console.log(b);

let b = a.replace(/[O,o]/g, "*");

console.log(b);

console.log("\n");

//7

let c = rand(0, 2);
console.log(c);

let d = rand(0, 2);
console.log(d);

let e = rand(0, 2);
console.log(e);

let f = rand(0, 2);
console.log(f);

let sum0 = 0,
  sum1 = 0,
  sum2 = 0;
/*if (c === 0) count0++;
else if (c === 1) count1++;
else c++;
*/
if (c === 0) {
  sum0++;
}
if (d === 0) {
  sum0++;
}
if (e === 0) {
  sum0++;
}
if (f === 0) {
  sum0++;
}
if (c === 1) {
  sum1++;
}
if (d === 1) {
  sum1++;
}
if (e === 1) {
  sum1++;
}
if (f === 1) {
  sum1++;
}
if (c === 2) {
  sum2++;
}
if (d === 2) {
  sum2++;
}
if (e === 2) {
  sum2++;
}
if (f === 2) {
  sum2++;
}
console.log(`vienetai ${sum1}, nuliai ${sum0}, dvejetai ${sum2}`);

console.log("\n");

//8

let g = rand(0, 4);
console.log(g);

let h = rand(0, 4);
console.log(h);

if (g >= h) {
  let rez = g / h;
  console.log(rez.toFixed(2));
} else if (h >= g) {
  let rez = h / g;
  console.log(rez.toFixed(2));
}

console.log("\n");

//9

let i = rand(0, 25),
  j = rand(0, 25),
  k = rand(0, 25);
console.log(i), console.log(j), console.log(k);

/*if (j < i < k ) {
  console.log(i);
}else if (i < j < k) {
  console.log(j);
}else if (i < k < j ) {
  console.log(k);
}
*/

let max = Math.max(i, j, k),
  min = Math.min(i, j, k);

/*if (i !== max && i !== min) {
  console.log (i);
}else if (j !== max && j !== min) {
  console.log(j);
}else if (k !== max && k !== min) {
  console.log(k);
}

*/

if (j < i && i < k) {
  console.log(i);
} else if (j > i && i > k) {
  console.log(i);
} else if (i < j && j < k) {
  console.log(j);
} else if (i > j && j > k) {
  console.log(j);
} else if (i < k && k < j) {
  console.log(k);
} else if (i > k && k > j) {
  console.log(k);
}

console.log("\n");

//10

let l = rand(110, 120),
  m = rand(97, 122),
  n = rand(97, 122);

console.log(String.fromCharCode(l, m, n));

console.log("\n");

//11

let planet = "earth";
let star = "Sun";
let age = "4.54 billion years";
let satellite = "moon";

console.log(
  `The planet ${planet} is the third planet from the ${star}. ${planet} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, ${planet} formed over ${age} ago. ${planet}'s gravity interacts with other objects in space, especially the ${star} and the ${satellite}, ${planet}'s only natural satellite.`
);

console.log("\n");

//12

function rand(min, max) {
  a = Math.floor(Math.random() * (max - min + 1)) + min;
  return a.toFixed(2);
}

asd = rand(0, 120);
console.log(a.toFixed(2));

console.log("\n");

//13

console.log("\n");
