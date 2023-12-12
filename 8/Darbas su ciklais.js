function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*1.Naršyklėje nupieškite linija iš 400 “*”. 
a.              Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;
b.              Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
2.Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
3.Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
4.Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
5.Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.
6.Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.
7.Duotas vardų masyvas, kuriame visi vardai prasideda mažąja raide. Reikia sukurti algoritmą, kuris visus vardus konvertuoja į iš didžiosios raidės prasidedančius vardus:
let namesArray = [
	'alice', 'bob', 'charlie', 'david', 'emily',
	'frank', 'grace', 'harry', 'isabella', 'jack',
	'kate', 'liam', 'molly', 'nathan', 'olivia',
	'peter', 'quinn', 'rachel', 'steve', 'tina'
];



8.Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
 
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
 
9.Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
a.              Iškritus herbui;
b.              Tris kartus iškritus herbui;
c.              Tris kartus iš eilės iškritus herbui;

Papildomos (jei reikia):
10.Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
11.Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
 “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.


Užduotis stipruoliams:
Sukurti algoritmą, kuris sugeneruoja n=10 rombą iš “*” simbolių html dokumente. Kiekviena iš panaudotų žvaigždučių turi savo spalvą. (no google or ChatGPT)
*/

/*let n = 100;
let simbolis = `<black>*</black>`,
	redSimbolis = `<red>*</red>`;
for (let indeksas = 0; indeksas < n; indeksas++) {
	let eilute = "" + redSimbolis + redSimbolis + simbolis;
	eilute += "<br>";
	document.write(eilute);
    */

/*let n = 10;

for (let i = 0; i < n; i++) {
  document.write("* * * * * * * * * *<br>");
*/

///5

let numb = [];
let numb150 = 0;

for (let i = 0; i < 300; i++) {
  let randomNum = rand(0, 300);

  if (randomNum > 150) numb150++;

  if (randomNum > 275) {
    document.write(`<span style="color: red;">${randomNum}</span> `);
  } else {
    document.write(`<black>${randomNum}</black> `);
  }
}
//document.write(`<span style="color: red;>${randomNum}</span> `);
console.log(numb150);

console.log("\n");

///8
