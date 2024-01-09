typeof tikrina duomenų tipą;

 === sulyginimo operatorius, griežtas tikrinimas, tikrina ir duomenų tipą

!== operatorius nelygu, griežtas tikrinimas, tikrina ir duomenų tipą

let kintamasis = "CHICKEN";
                    0123456
console.log(kintamasis[0]);C
console.log(kintamasis[1]);H
console.log(kintamasis[2]);I
console.log(kintamasis[3]);C
console.log(kintamasis[4]);K
console.log(kintamasis[5]);E
console.log(kintamasis[6]);N

//Stringo ilgis gaunamas pasinaudojant savybe kintamasis.length
kintamasis = "CHICKEN"
console.log(kintamasis.length);

let vardas14 = 'John', pavarde = 'Deppas';
                                  012345
//Sudarysime string tipo kintamąjį iš pirmų dviejų vardo 
//ir paskutinių dviejų pavardės raidžių.
let inicialai = vardas14[0] + vardas14[1] + pavarde[pavarde.length - 2] pavarde[4] + pavarde[pavarde.length - 1]pavrde [5];

//1. Sukurti kintamajį pavadinimu 'password' ir priskirti jai sugalvotą reikšmę;
//2. Jei password kintamasis yra 8 simbolių ar ilgesnis, į konsolę parašyti "Slaptažodis tinkamas"
//3. Jei slaptažodis yra trumpesnis nei 8 simboliai, į konsolę parašyti "Slaptažodis per trumpas"

let password = "ledinukas";

if (password.length > 8) {
	console.log("Slaptažodis tinkamas");
} else {
	console.log("Slaptažodis per trumpas");
}


Lyginis nelyginis
if(diena <= 7 && diena >= 1)
{
    if(diena % 2 === 0)
    {
        console.log('Diena yra lyginė');
    }
    else{
        console.log('Diena yra nelyginė');
    }
}

/*Single quote	\'
Double quote	\"
Ampersand	\&
Newline	\n
Tab	\t
Backslash	\\
Carries return	\r
Backspace	\b
Form feed	\f
Vertical tab	\v\*/


Duomenu tipo keitimas

let skaiciausTekstas = '-12.7';
parseInt(skaiciausTekstas) funkcija, gauna tik sveikuosius skaicius
let skaicius = parseInt(skaiciausTekstas);
console.log(skaicius);-12

unary operator:
skaicius = +skaiciausTekstas;
console.log(skaicius);-12.7

Number funkcija:
skaicius = Number(skaiciausTekstas);
console.log(skaicius);-12.7

Math
skaicius = 12.7;
//Apvalinimas i artimesne puse
skaicius = 12.7;12.4
let roundedSkaicius = Math.round(skaicius);
console.log(skaicius)13,12

//Apvalinimas i mazaja puse
skaicius = 12.9
roundedSkaicius = Math.floor(skaicius);
console.log(skaicius);12

//Apvalinimas didziaja puse
skaicius 12.1
roundedSkaicius = Math.ceil(skaicius);
console.log(skaicius);13

//Skaiciaus konvertavimas i string duomenu tipa:

skaicius = 12.7
let valiuta = skaicius.toFixed(2);
console.log(valiuta); jei nori skaiciaus console.log(+valiuta)

let tekstasSkaicius = skaicius + 'stringas'; skaicius + stringas = stringas

tekstasSkaicius = skaicius.toString();

tekstasSkaicius = String(skaicius);

let eilerastis = "Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ozyss";
//                0123456789...
//Teksto paieška pasinaudojant indexOf() metodu. Jei tekstas nerandamas,
// gražinama reikšmė: -1

//ieskoma nuo pradžios
let ozysPosition = eilerastis.indexOf("ožys");randa pirma o ozio raide 8

//ieškoma nuo pabaigos
let lastOzysPosition = eilerastis.lastIndexOf("ožys"); isko nuo galo bet rodo nuo pradzios 8 
let lastOzysPosition = eilerastis.lastIndexOf("ožyss")  51

//Pasinaudojant gauta teksto pozicija, galime gauti žodį ožys su substring() metodu
let ozysText = eilerastis.substring(ozysPosition 8, ozysPosition nuo 8 + 4 raides);ozys
let ozysText = eilerastis.substring(0, 6) ruosesi

let kitasGyvunas = "avinas";
//Teksto atitikmenu keitimas stringe - visi atitikmenys
let kitasEilerastis = eilerastis.replaceAll("ožys", kitasGyvunas);

//pakeisti daugiau charu
let b = a.replaceAll("O", "*").replaceAll("o", "*"); 
let b = a.replace(/[O,o]/g, "*");

//Teksto atitikmenu keitimas stringe - pirmas atitikmuo
kitasEilerastis = eilerastis.replace("ožys", "šuo");

//Teksto užrašymas didžiosiomis raidėmis
let eilerastisDidziosiomis = eilerastis.toUpperCase();

//Teksto užrašymas mažosiomis raidėmis;
let eilerastisMazosiomis = eilerastis.toLowerCase();

//teksto dalies gavimas su slice metodu:
//pirmasis parametras - pradžios indeksas, antrasis parametras - galinis subteksto indeksas
let text = "Apple, Banana, Kiwi";
//          0123456789012345678
 //nuo pozicijos iki pozicijos
let part = text.slice(7, 13); Banana

 //neigiamas antrasis parametras nupjauna galinius simbolius
part = text.slice(0, -6); Apple Banana

//simboliu pasalinimas nuo pradžios iki ....
part = text.slice(7); Banana 

//Simboliu nuo galo gavimas
part = text.slice(-4);Kiwi trina nuo pradzios bet palieka gala -4

//let eilerastis = 'Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys';
//teksto paieska stringe:
if (eilerastis.includes("ganytis")) {
	console.log("kintamajame eilerastis yra zodis: ganytis");
} else {
	console.log("kintamajame eilerastis tokio zodzio nera");
}

//random skaiciaus sugeneravimas... (2 parametrai: nuo, iki  [inclusive])
let skaiciukas = rand(97, 122);
console.log(skaiciukas);

//sugeneruojama raidė pagal unikodą
console.log(String.fromCharCode(skaiciukas));

//index suradimas find index

let elementIndex = products.findIndex((value) => value.id === id);
  const product = products[elementIndex];



//HTML elemnto nuskenavimas
let paragrafas = document.querySelector(".isskirtinis-paragrafas");
let informacija = document.querySelector("inpputo clasee arba id")

//element.valueis inputo istraukia info
inputoInformacija = informacija.value


//HTML lemento pakeitimas
paragrafas.inner(Text arba HTML) = "pakeistas tekstas";
inne

// elementas.value - iš inputo ištraukia informaciją;
// 	let vardoIvestiesReiksme = vardoIvestis.value; //reiksme is inputo
// 	paragrafas.innerText = `Sveiki prisijunge prie puslapio, ${vardoIvestiesReiksme}`; //reiksme is inputo priskiriama paragrafui
// }

<button id="btn", onclick="funkcija" ></button>
btn.addEventListener("click", funkcija)



//Bandyme patikrinti ar kintamasis tekstas turi skaiciu savyje;

let tekstas = "Kazys";
if (/[0-9]/.test(tekstas)) {
	console.log("Tekste yra skaiciu");
} else {
	console.log("Tekste nera skaiciu");
}

//Masyvai Array

let naujasMasyvas = [1, 8, 7, 3, 46, 9, 7, 8];
//Kai norime pridėti elementus prie masyvo:
naujasMasyvas.push(",");

//Pašalinimas elemento iš masyvo galo:
naujasMasyvas.pop();

// Elemento šalinimas iš priekio:
naujasMasyvas.shift();

// Elemento šalinimas pagal indeksą
// masyvoPavadinimas.splice(nuoKur, kiek)
naujasMasyvas.splice(3, 1);
console.log(naujasMasyvas);

// Elemento šalinimas nuo galo
naujasMasyvas.splice(-1);
console.log(naujasMasyvas);

// Prideti nauja elementa i masyvo prieki
naujasMasyvas.unshift(12);

// Masyvo elementu atspausdinimas pasinaudojant delimiteriu
console.log(naujasMasyvas.join(", "));
// console.log("<li>" + naujasMasyvas.join("</li><li>") + "</li>");

//Masyvo apsukimas antraip.
naujasMasyvas.reverse();

 //msayvo kintamuju nuo galo salinimas ciklu
    for (let i = masyvas.length - 1; i >= ; i--);

// Naujo aray sukurimas su pradiniais 4 elementais
 let kint = new Array(4);

 //elemento iš masyvo reikšmės paėmimas pagal indeksą
console.log(kint);
console.log(kint[1]);

//Naujo tuščio array sukurimas
/let kint = [];

//elemento pridejimas pagal indeksa ir reiksme
kint[0] = rand(0, 2);

//Prideda nauja elementa i gala
kint.push(10);

//Naujo array sukurimas su pradinemis reikšmėmis
let kint = [rand(0, 2), rand(0, 2), rand(0, 2), rand(0, 2)];

 //elemento iš masyvo reikšmės paėmimas pagal indeksą
console.log(kint);
console.log(kint[1]);

//.fill(x) užpildo visus masyvo elementus tam tikra reikšme
let count = new Array(3).fill(0); uzpildo 0

//begalinis ciklas
while (true) {
    console.log(i);
    i++;
}
 
//Ciklai

let zmones = ["Petras", "Rasa", "Jonas", "Justinas", "Jurate", "Kastytis"];
let i = 0;       0         1        2         3          4         5

while (i < 100) {	
i++;
console.log(i);} consolej nuo 1 iki 100

while (i < zmones.length) {
    console.log(zmones(i).toUpperCase());
    i++;} keis visus i didziasias raides zmones(i) tai masyvo nr 1 2 3 4 5 gali buti ir i < 5 tada pakeis tik 5 o su .length keis visus


//begalinis ciklas
while (true) {	
console.log(i);
if (i === 100) break; break - nutraukia ciklą///////
i++;}

//do while mes naudojame kai norime pirma atlikti operacija, o tik po to patikrinimą
do{
i++
}
while(i < 10) pirma padaro paskui tikraina atvirksciai nei while 

for (let indeksas = 0; indeksas < 1000; indeksas++) nuo 0 oko 1000
for (let indeksas = 0; indeksas < n; indeksas += 4) kas ketvirtas
for (let indeksas = 100; indeksas < n; indeksas += 4) kas ketvirtas nuo 100

// paraso kaip console tik ekrane
document.write(eilute);

//style aprasymas scripte
document.write('<b class="asd" style="color: blue;">asdasd</b>') jei yra vienodos kabutes tai reik naudot style =\" color: blue;\"



if (xxxxx % 2 === 0) patikrina ar lyginis skaicius

let fibonacci = [0, 1];

// Elemento idejimas i masyvo vieta pagal indeksa
fibonacci[2] = fibonacci[1] + fibonacci[0];

// Elemento pridejimas prie masyvo galo
fibonacci.push(fibonacci[1] + fibonacci[0]);

//funkcijos

//Tai kas yra funkcijos deklaracijoje - yra parametras

// arrow funkcija
() => expression

() => {
	statements
  };

//funkciju uzrasymo budai

let add = (a, b) => a + b;
console.log(add(5, 5));s

let add = function (a, b) {
  return a + b;
};
console.log(add(5, 5));

function add(a, b) {
  return a + b;
}
console.log(add(5, 5));


function showMessage(message) {
	console.log(message);
}

 const showMessage = (message) => {
console.log(message);
};

const showMessage = function (message) {
console.log(message);
};

//Tai kas yra iskvietime tarp skliaustu - yra argumentas

showMessage("Labas pasauli");

// return grazina reiksme jei nera return buna undefined

function findBiggerValue (a, b) {
	if (a > b) return a;
	else return b;
}
console.log(findBiggerValue(4, 5)); // pagal virsuj esancia funkcija gauni 5

//tas pats bet panaudojus boolean (treu arba false) funkcija funkcijoj
//naudoti nerekomenduotina
function findBiggerValue(a, b) {
	function isABiggerThanB(aValue, bValue) {
		return aValue > bValue;
	}
	if (isABiggerThanB(a, b)) return a;
	else return b;
}

// perdaryta virsuj esanti funkcija
function isABiggerThanB(aValue, bValue) {
	return aValue > bValue;
}
function findBiggerValue(a, b) {
		if (isABiggerThanB(a, b)) return a;
	else return b;
}

// rekursija
function recursion(value) {
	console.log("value: " + value);
	if (value < 10) recursion(value + 1);
	console.log(value);
}

recursion(4);

//Rekursijos panaudojimas
function factorial(n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(4));

//callback funkcija
function callBackFunction(message, callBack) {
	console.log(message);
	callBack();
}
callBackFunction(`labas pasauli`, () =>{console.log(`funkcijos pabaiga`);})



//Sukuriama funkcija su pavadinimu generateArrayOfRandomNumbers
//Skliausteliuose nurodomi naudotini funkcijos parametrai.
function generateArrayOfRandomNumbers(min, max, countOfElements) { // min = 5 ar max = 5 suteikiama defaultine reiksmo jei nieko neivedi
	let array = [];
	for (let i = 0; i < countOfElements; i++) {
		array.push(rand(min, max));
	}
	//gražinama reikšmė
	return array;

}function getNextElement(array, index) {
	if (array.length - 1 === index) return array[0];
	else return array[index + 1];

}
//objektai

//JSON - JavaScript object notation

//Tuscio objekto sukurimas
const gyvunas = {};
gyvunas.animalType = "Liutas";

//Trys skirtingi budai, kaip galime kreiptis i objekto laukus

let laukas = "animalType";
console.log(gyvunas[laukas]);
console.log(gyvunas["animalType"]);
console.log(gyvunas.animalType);

const dog = {
breed: "German shepherd",
name: "Angela",
age: 7,
colors: ["brown", "black"],
}

const dog = {};
dog.breed = "German Shepherd";
dog.name = "Angela";
dog.age = 7;
dog.colors = ["brown", "black"];

const person = {
	firstName: "John",
	lastName: "Doe",
	age: 36,
	nationality: "British",
	isMarried: true, false // cia ivesti true arba false
	kids: ["Sara", "Boston"],
};
// Hello, my name is John Doe, my age is 36, I am British and my kids are Sara, Boston
const greetingText = `Hello, my name is ${person.firstName} ${
	person.lastName
}, my age is ${person.age}, I am ${
	person.nationality
} and my kids are ${person.kids.join(", ")}. And I am ${
	person.isMarried ? "Married" true : "Not married" false  // cia true arba false reiksmes
}`;
   
///if else :?

?- if
:-else


//Dinaminis savybiu paemimas:

const dog = {
breed: "German shepherd",
name: "Angela",
age: 7,
colors: ["brown", "black"],
}

dog.breed = "German Shepherd";
dog.name = "Angela";
dog.age = 7;
dog.colors = ["brown", "black"];

for (let property in dog) {
	console.log(`${property}: ${dog[property]}`);
}

/// ...args neribotas kiekis elementu/argumentu	... spread operatorius
// funkcija kaip gauti maximalia reiksme
const args = [1, 2, 3]
function findMaximumValue (...args) {
	let max = args[0]; // pirmas elementas
	for (let index in args) {
		if (args[index] > max) {
			 max = args[index];}
	};
}

Math.max // funkcija virsuj esanciai funkcijai. negalima ivesti stringo
Math.min// minimali reiksme
findMaximumValue(4, 7, 8, 100, 100, 150, -3)// sliaustuose cia yra ...args kiek nori tiek vedi
findMaximumValue(...[4, 7, 8, 100, 100, 150, -3])// spread operatorius viska padaro kad butu ne lauztiniuose sklaisutuose


const people = [
	{
		firstName: "Laura",
		lastName: "Gonzales",  //ideksas 0
		age: 25,
		nationality: "Iraq",
	},
	{
		firstName: "Saulius",
		lastName: "Kreve",
		age: 38,                    /// indeksas 1
		nationality: "Lithuanian",
		isMarried: false,
	},
	{
		firstName: "John",
		lastName: "Schmit",
		age: 39,                       //ideksas 2
		nationality: "Canada",
	},
];

// Kreipimasis i objektus masyve
console.log(people[1].firstName, people[1].lastName); // Saulius Kreve

//Objektu pasiemimas is masyvo per cikla
for (let person of people) {
	console.log(person.firstName, person.lastName); laura gonzales, saulius kreve, John Schmit.
}

///validavimas 
function validateFirstName(name) {
    let isValid = true;

    if (!name) {
      isValid = false;
    }
    if (/[0-9]/.test(name)) {
      isValid = false;
    }
    if (/[~!@#$%^&*[]()_-=?,.<>]/.test(name)) {
      isValid = false;
    }
    return isValid;
  }

function validateAge(age) {
  let is isValid = true;

  if (!age) {
    isValid = false;
  }
  if (isNaN(parseInt(age))) {
    isValid = false;
  }
  if ( age < 0 || age > 200) {
    isValid = false;
  }
  if (age % 1 !==0) {
    isValid = false
  }
  return isValid;
}

// fetch 

fetch("https://dog.ceo/api/breeds/image/random")
	.then((atsakymas) => atsakymas.json()) //1. gaunamas atsakymas is serverio. Atsakymas konvertuojamas i teksta
	.then((atsakymas) => {
		console.log(atsakymas);
		document.write(`<img src="${atsakymas.message}"/>`);
	}); //2. Iskoduotas atsakymas yra panaudojamas;


fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json())
	.then((atsakymas) => console.log(atsakymas));
//0.3sek


// Error handlinimas
const skaicius = 5;

try {
skaicius++;
} catch (error) {
console.log(error); /// skaicius yra konstanta bet jis yra keiciamas try catcha pahauna errora ir tesia darba
}

try {
	fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
} catch (error) {
	console.log(error);
}

//promisas pazadas fetch

new Promise((resolve, reject) => { // resolvas yra .then rejectas yra .catch
	
})

fetch(
"https://www.thecocktaildb.com/apsi/json/v1/1/filter.php?c=Ordinary_Drink"
)
.then((response) => response.json())
.then((response) => console.log(response))
.catch((error) => console.log(error));

/// sekminga uzklausa i serveri promisai

const pazadas = new Promise((resolve, reject) => {	
console.log("Prasidejo uzklausa i serveri");
setTimeout(() => {
resolve("Zinute is serverio"); //settimeout po kiek laiko prasides funkcija
}, 1000);
console.log("pasibaige uzklausa i serveri");
}).then((atsakymas) => console.log(atsakymas));

// nesekminga uzklausa i serveri promisai

const pazadas = new Promise((resolve, reject) => {
let isValidUrl = false;               //// jei sekminga tai turi buti true
console.log("Prasidejo uzklausa i serveri");
if (isValidUrl)
etTimeout(() => {
resolve("Zinute is serverio");
}, 1000);
else reject(new Error("Neteisingai nurodytas url"));
console.log("Pasibaige uzklausa i serveri");
})
.then((atsakymas) => console.log(atsakymas))
catch((klaida) => console.log(klaida));

//async funkcijos asinchronines sincronines funkcijos

//sinchronine funkcija

function callServerSync() {
	console.log("Uzklausa i serveri prasidejo");
	setTimeout(() => {
		console.log("gauname atsakyma is serverio");
	}, 1000);
	console.log("Užklausa baigta");
}
	callServerSync();

//asinchronine funkcija async

async function callServerAsync() {
	console.log("Uzklausa i serveri prasidejo");
	await new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("gauname atsakyma is serverio");
			resolve(); ///promisas turi grainti arba resolvearba error nes tesis amzinai
		}, 1000)
	);
	console.log("Užklausa baigta");
	return "atsakymas1";
	};

	callServerAsync().then((atsakymas) => console.log(atsakymas));




           ///const allUrls1 = [
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
		// 	],
		// 	allUrls2 = [
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
		// 	],
		// 	allUrls3 = [
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon_vodka",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
		// 		"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sherry",
		// 	];
	//new date timestamp paskaiciuoti kiek laiko trunka kreipimasis i serva ir atgal 
//fetch sync async skirtumas nereik rasyt .then
	function fetchData() {
const startTime = new Date();
fetch(allUrls2[0])
.then((response) => response.json())
.then((response) => {
console.log(response);       ///{} skliaustai naudojami jei nori tureti daugiau elementu
const endTime = new Date();
const duration = endTime.getTime() - startTime.getTime();
})};

//fetch sync async skirtumas nereik rasyt .then

async function fetchDataAsync() {
const startTime = new Date(); // 1796521651
const request = await fetch(allUrls2[1]);
const drinks = await request.json();
const endTime = new Date();
const duration = endTime.getTime() - startTime.getTime();
console.log("async - " + duration + "ms");
console.log(drinks)};

//fetch sync async skirtumas nereik rasyt .then

async function fetchAllDataByIngredient(urls) {
const startTime = new Date();
const array = [];
for (const url of urls) {
const promise = await fetch(url);
const answer = await promise.json();}}


//kreipimasis i daug URL vienu metu

async function fetchAllDataByIngredient(urls) {
const startTime = new Date();
const array = [];
for (const url of urls) {
const promise = await fetch(url);
const answer = await promise.json();
array.push(answer);
}
const endTime = new Date();
const duration = endTime.getTime() - startTime.getTime();
console.log("async one by one - " + duration + "ms");
}

fetchAllDataByIngredient(allUrls3); /// ka ivedi i skliasutus ta ir turi jei arrejus is daug url visi atvaizduojami paeiliui
	

async function fetchAllDataIngredient(urls) {
const startTime = new Date();
const promises = urls.map((url) =>
fetch(url).then((response) => response.json())
);
const dataFromAllSources = await Promise.all(promises);
console.log(dataFromAllSources);
const endTime = new Date();
const duration = endTime.getTime() - startTime.getTime();
console.log("async all at the same time - " + duration + "ms");
}
fetchAllDataIngredient(allUrls3);


//Masyvo destrukturavimas:

const array1 = [1, 2, 3, 4];
const array2 = [...array1]; // arejaus kopinimas

console.log(array2);
array.push(5);
console.log(array1);
console.log(array2);

const [pirmas, , trecias] = array1;

console.log(pirmas);
console.log(antras);
console.log(trecias);

//Masyvo destrukturavimas:
const [, antras, , , penktas] = array1; /// kableliai praleidiz elementa arejuj
console.log(antras);
console.log(penktas);
onsole.log(array);

// //objekto destrukturavimas:
const obj = {
id: 4,
name: "John",
surname: "Doe",
age: 27,
married: false,
};

const { name, surname, married, id } = obj;

console.log(name, surname, married, id);

// //map:

const array = [1, 2, 3, 4, 5];

const mappedArray = array.map((value) => value / 2); // visu reiksmiu arejuj padalinimas is 2
console.log(mappedArray);
console.log(array);

// //filter

const filteredArray = array.filter((value) => value > 3); // gauna visas reiksmes didesnes nei 3(4, 5)
console.log(filteredArray);

// //some

const isThereAWantedValue = array.some((value) => value(value.id) === 7);  // tikrina r arejui yra 7 jei value.id tikrina objekte
console.log(isThereAWantedValue);

//arrayjaus supusinimasi kita areju

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
 arr.push(...arr2);


 /// nurodyri faila modulio importavimas
 //kai vienas vaile susikuri daugiau js failu ir keli i pagrindini faila

 const sum = require("./math-module") //math-module failo pavadinimas sum funkcijos pavadinimas

 //exportavimas
//cia irasyti tam faile kuri pajemi i pagrindini faila
 module.exports = sum

 //daugiau funkcij importavimas

const sum = require("./math-module").sum;
const atimti = require("./math-module").subtract;

/// exportavimas

module.exports = {sum: sum, subtract: subtarct};

//serverio sukurimas

const http = require(`http`);
const server = http.createServer((req, res) => {

});
server.listen(3000);


//events
//input reiksmiu gavimas
const names = ["Justinas", "Asta", "Rasa", "Jonas", "Antanas"];
const nameInputElement = document.querySelector("#name");

nameInputElement.addEventListener("keyup", (event) => {
	// 1. budas kaip gauti inputo reiksme
	// const inputValue = event.target.value;
	// 2. budas..
	const inputValue = nameInputElement.value;})

//atvaizdavimas html
	function showValues(list) {
		let dynamicHTML = "";
		for (const name of list) {
			dynamicHTML += `<li>${name}</li>`;
		}
		document.querySelector("#list").innerHTML = dynamicHTML;
	}
//filtravimas

const filteredArray = names.filter((value) =>
	value.toLowerCase().includes(inputValue.toLowerCase()));

showValues(filteredArray);
console.log(filteredArray);
			

// objekto pavertimas i stringa

objektas = json.stringify({})


// Norint išsaugoti elementus localStorage:
//1 budas:
localStorage.vardas = "Jonas";
localStorage.pavarde = "Nainys";

//2 budas:
localStorage.setItem("vardas2", "Antanas");
localStorage.setItem("pavarde2", "Stanionis");

//Norint gauti elementus iš localStorage:
//1 budas:
let vardas = localStorage.vardas,
	pavarde = localStorage.pavarde;
//2 budas:
let vardas2 = localStorage.getItem("vardas2"),
	pavarde2 = localStorage.getItem("pavarde2");

//localStorage yra saugomi tik string elementai
// jei norime saugoti ne string elementus:

let arrayOfObjects = [
	{ id: 1, name: vardas, surname: pavarde },
	{ id: 2, name: vardas2, surname: pavarde2 },
];
// issaugojimas:
localStorage.setItem("Objektai", JSON.stringify(arrayOfObjects));

//gavimas:
const arrayFromStorage = JSON.parse(localStorage.getItem("Objektai"));
console.log(arrayFromStorage);