/*function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Užduotis: sukurkite fibonacci skaičių seką susidarančią iš 50 skaičių.

let fibonacci = [0, 1];
for (let i = 2; i < 50; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); //i-1 i-2 pajema pries tai buvusi indeksa nes fibonacci 0, 1, 1, 2, 3, 5, 8ima du pries tai buvusius ir sudeda gauna trecia
}
// console.log(fibonacci);

//masyvo su atsitiktinėmis reikšmėmis generavimas. 10 reikšmių

let atsitiktiniaiSkaiciai = [];

for (let i = 0; i < 10; i++) {
  let randomSkaicius = rand(0, 10);
  atsitiktiniaiSkaiciai.push(randomSkaicius);
  //atsitiktiniaiSkaiciai.push(rand(0, 10));
  console.log(atsitiktiniaiSkaiciai);
  //atsitiktiniaiSkaiciai.push(rand(0, 10));
  // atsitiktiniaiSkaiciai[i] = randomSkaicius;
}
console.log("\n");
//pasinaudodami atsitiktiniu skaiciu masyvu, atspausdinkite
// tik nelygine reikšmę turinčius elementus

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
  if (atsitiktiniaiSkaiciai[i] % 2 !== 0) {
    console.log(atsitiktiniaiSkaiciai[i]);
  }
}
console.log("\n");
//Atspausdinkite visas masyvo atsitiktiniaiSkaiciai reikšmes

for (i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
  console.log(atsitiktiniaiSkaiciai[i]);
}
//Suskaičiuokite, kiek masyve yra elementų su reikšme: 2

let coutnOfTwos = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
  if (atsitiktiniaiSkaiciai[i] === 2) coutnOfTwos++;
}
//Suskaičiuokite, kiek masyve yra elementų su reikšme, mažesne nei 5

let = coutnOfFives = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
  if (atsitiktiniaiSkaiciai[i] < 5) coutnOfFives++;
}

//Suskaičiuokite, kiek masyve yra elementų mažesnių nei 3 arba didesnių nei 7

let numb = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
  if (atsitiktiniaiSkaiciai[i] < 3 || atsitiktiniaiSkaiciai[i] > 7) numb++;
}

// Užduotis: išfiltruokite iš masyvo visus skaičius, kurie dalinasi iš 2;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
  if (atsitiktiniaiSkaiciai[i] % 2 === 0) {
    atsitiktiniaiSkaiciai.splice(i, 1);
    i--;
  }
}

/*1.Sukurkite masyvą iš 20 elementų:
Kurių reikšmės: 0, 1, 2 …, 18 ,19;
Kurių reikšmės: 1,2 3, … ,19, 20
Kurių reikšmės: 19, 18 … 2, 1, 0
Kurių reikšmės: 20, 21, 22…. 38, 39..
Kurių reikšmės: 49, 48, 47…. 31, 30
Su atsitiktinėmis reikšmėmis nuo 0 iki 10

2.Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19;

3.iš f masyvo ištrinkite elementus kurie:
Yra lyginiai;
Nelyginiai;
Dalinasi iš 3;
Yra lygūs savo indeksui;
Yra mažesni nei 5 arba didesni nei 8;
Yra  nuo 2 iki 5;
kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
kurių suma su sekančiu elementu masyve yra lyginė
	
Po kiekvienos filtracijos naujai sugeneruokite masyvą f

Sukurkite atsitiktinio stringo iš 15 lotyniškų mažųjų raidžių generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę. 

Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų

 Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;

Sugeneruokite 80 atsitiktinių skaičių nuo 8 iki 32. Apskaičiuokite visų šių skaičių vidurkį.

*/

///1

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(i);
}
console.log(arr);

arr = [];
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}
console.log(arr);

arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(i);
}
arr.reverse();
console.log(arr);

arr = [];
for (let i = 20; i < 40; i++) {
  arr.push(i);
}
console.log(arr);

arr = [];
for (let i = 30; i < 50; i++) {
  arr.push(i);
}
arr.reverse();
console.log(arr);

arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 20));
}

//2

console.log(arr.join("->"));

//3

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mass = [];
for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

//a yra lyginiai

for (let i = 0; i < mass.length; i++) {
  if (mass[i] % 2 === 0) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

//b yra nelyginiai

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  if (mass[i] % 2 !== 0) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

//c jeigu skaicius dalinasi is triju

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  if (mass[i] % 3 === 0) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

//d skaiciai lygus savo indeksui

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  if (mass[i] === i) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

//e Yra mažesni nei 5 arba didesni nei 8;

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  if (mass[i] < 5 || mass[i] > 8) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

//f Yra  nuo 2 iki 5;

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  if (mass[i] >= 2 && mass[i] <= 5) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

// g kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  //1. patikriname ar elementas yra paskutinis
  //jei taip kaip sekanti elementa imame pirmaji masyvo elementa arr[0]
  //jei ne kaip sekanti elementa imam sekanti arr[i + 1]
  let nextElement;
  if (mass.length - 1 === i) {
    // mass.lenght - 1 paslutinis masyvo elementas
    nextElement = mass[0];
  } else {
    nextElement = mass[i + 1];
  }
  if (mass[i] + nextElement >= 10) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);

//h kurių suma su sekančiu elementu masyve yra lyginė

mass = [];

for (let i = 0; i < 20; i++) {
  mass.push(rand(0, 10));
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
  let nextElement;
  if (mass.length - 1 === i) {
    // mass.lenght - 1 paslutinis masyvo elementas
    nextElement = mass[0];
  } else {
    nextElement = mass[i + 1];
  }
  if ((mass[i] + nextElement) % 2 === 0) {
    mass.splice(i, 1);
    i--;
  }
}
console.log(mass);
