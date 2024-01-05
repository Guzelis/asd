// funkcija apskaiciuoti pazymiu vidurki
function countAvarage(...pazymiai) {
  let sum = 0;
  for (let pazymys of pazymiai) {
    sum += pazymys;
  }
  let average = sum / pazymiai.length;
}
countAvarage(5, 5, 8, 9, 10);

//Sukurti funkciją, kuriai paduodamas skaičių masyvas.
//Jei masyve daugiau nei 6 elementai - kiekvieną elementą padalinti iš 2.
// Kitu atveju padauginti visus elementus iš 2.
// Gražinti visų masyve esančių elementų vidurkį.
// tikrinimą daryti išorėje
//1. Tikrinti ar masyve yra daugiau nei 6 elementai
//Jei taip:
//Iskviesti funkcija kuri apskaiciuoja vidurki padalindama
//visus skaicius is 2
//Jei ne:
//Iskviesti funkcija kuri apskaiciuoja vidurki
//padaugindama visus skaicius is 2
//2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas
//3. Apskaiciuoti rezultatinio masyvo elementu reiksmes
//4. Apskaiciuoti rezultatinio masyvo elementu suma;
//5. Apskaiciuoti vidurki padalinant visa elementu suma is elementu kiekio
//6. Grazinti vidurki

const array = [4, 5, 8, 6];

if (array.length > 6) {
  countAvarageSpecial(array, divedeAllElements);
} else {
  countAvarageSpecial(array, multiplyAllElements);
}

function divedeAllElements() {
  for (let index in array) {
    array[index] /= 2;
  }
  return array;
}

function multiplyAllElements() {
  for (let index in array) {
    array[index] *= 2;
  }
  return array;
}

//2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas
function countAvarageSpecial(array, callback) {
  if (typeof array !== "object") return 0;
  //3. Apskaiciuoti rezultatinio masyvo elementu reiksmes
  const resultArray = callback(array);
  //4. Apskaiciuoti rezultatinio masyvo elementu suma;
  let sum = 0;
  for (let value of resultArray) {
    sum += value;
  }
  //5. Apskaiciuoti vidurki padalinant visa elementu suma is elementu kiekio
  let average = sum / array.length;
  return average;
}
