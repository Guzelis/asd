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
part = text.slice(7); Banana Apple

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


//HTML elemnto nuskenavimas
let paragrafas = document.querySelector(".isskirtinis-paragrafas");
let informacija = document.querySelector("inpputo clasee arba id")

//element.valueis inputo istraukia info
inputoInformacija = informacija.value


//HTML lemento pakeitimas
paragrafas.innerText(HTML) = "pakeistas tekstas";
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



