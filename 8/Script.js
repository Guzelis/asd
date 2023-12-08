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


console.log("\n")

//2

let myName = "Mantvydas", myLastName = "Guzas", birthDate = "1987", thisYear = "2023";

// console.log("Aš" + " " + "esu" + " " +  myName + " " + myLastName + "." + " " + "Man" + " " + "yra" + " " + (thisYear - birthDate) + " " + "metai(ų)" + "." );

console.log(`Aš esu ${myName} ${myLastName}. Man yra ${thisYear - birthDate} metai(ų)`);


console.log("\n")

//3

let userName = "Joe", userId = "Rogan",

userInicials = userName[0] + userName[1] + userId[0] + userId[1];

console.log(userInicials);


console.log("\n")


//4

let title = "Steven", registration = "Seagal", 

titleRegistration = title[3] + title[4] + title[5] + registration[3] + registration[4] + registration[5];

console.log(titleRegistration);


console.log("\n")

//5

let date = "2023-06-23";

if (date[5] + date[6] == 1) {             
  console.log("January");
}
if (date[5] + date[6] == 2) {
  console.log("February");
}
if (date[5] + date[6] == 3) {
  console.log("March");
}
if (date[5] + date[6] == 4) {
  console.log("April");
}
if (date[5] + date[6] == 5) {
  console.log("May");
}
if (date[5] + date[6] == 6) {
  console.log("June");
}
if (date[5] + date[6] == 7) {
  console.log("July");
}
if (date[5] + date[6] == 8) {
  console.log("August");
}
if (date[5] + date[6] == 9) {
  console.log("September");
}
if (date[5] + date[6] == 10) {
  console.log("October");
}
if (date[5] + date[6] == 11) {
  console.log("November");
}
if (date[5] + date[6] == 12) {
  console.log("December");
}


console.log("\n")


//6

let a = "Once upon a time in hollywood";
 
//let b = a.replaceAll("O", "*").replaceAll("o", "*");
 
//console.log(b);

 let b = a.replace(/[Oo]/g, "*");

console.log(b);

console.log("\n")

 //7

 let c = rand(0, 2);
console.log(c);

 let d = rand(0, 2);
console.log(d);

 let e = rand(0, 2);
console.log(e);

 let f = rand(0, 2);
console.log(f);





console.log("\n")

//8

let g = rand(0, 4);
console.log(g);

 let h = rand(0, 4);
console.log(h);

if (g >= h) {
  console.log((g / h).toFixed(2));
}else if (h >= g) {
  console.log((h / g).toFixed(2));
}


console.log("\n")

//9

let i = rand(0, 25), j = rand(0, 25), k = rand(0, 25)
console.log(i), console.log(j), console.log(k);

/*if (j < i < k ) {
  console.log(i);
}else if (i < j < k) {
  console.log(j);
}else if (i < k < j ) {
  console.log(k);
}
*/

let max = Math.max(i, j, k), min = Math.min(i, j k);

/*if (i !== max && i !== min) {
  console.log (i);
}else if (j !== max && j !== min) {
  console.log(j);
}else if (k !== max && k !== min) {
  console.log(k);
}

*/

if (j < i && i < k ) {
  console.log(i);
}else if (j > i && i > k) {
  console.log(i);
}else if (i < j && j < k ) {
  console.log(j);
}else if (i > j && j > k) {
  console.log(j)
}else if ( i < k && k < j) {
  console.log(k)
}else if (i > k && k > j) {
  console.log(k)
}



console.log("\n")


//10

let l = rand(110, 120), m = rand(97, 122),  n = rand(97, 122);

console.log(String.fromCharCode(l, m, n));

console.log("\n")

//11

 









