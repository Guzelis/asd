// const objektas = {
// 	//property
// 	//spalva - savybė, raudona - reikšmė
// 	spalva: "raudona",
// 	sayHello() {
// 		console.log("hello");
// 	},
// 	hello: () => {
// 		console.log("hellos");
// 	},
// 	hi: function () {
// 		console.log("hi");
// 	},
// }; // {} - objekto notacija

// objektas.hi();

class Person {
  // name;
  // height;
  // nationality = "Lithuanian";
  static countOfPeople = 0;
  constructor(name, height) {
    //konstruktoriaus paskirtis - nustatyti objekto laukus
    // funkcija - iškviečiama susikuriant naujam objektui
    this.name = name;
    this.height = height;
    this.nationality = "Lithuanian";
    Person.countOfPeople++;
  }

  //Metodas
  sayHello() {
    console.log(`Labas, aš ${this.name}`);
  }

  //Statinis metodas
  static countArea(height, width) {
    console.log(width * height);
  }
}

//Naujo objekto, pasinaudojant klase sukūrimas
const petras = new Person("Petras", 1.87);
const egle = new Person("Egle", 1.71);

//objekto metodų panaudojimas
petras.sayHello();
egle.sayHello();

//Statiniai metodai, savybes - kreipiamės į juos per klasę
Person.countArea(4, 5);
console.log(Person.countOfPeople);

// const objektas = {
// 	//property
// 	//spalva - savybė, raudona - reikšmė
// 	spalva: "raudona",
// 	sayHello() {
// 		console.log("hello");
// 	},
// 	hello: () => {
// 		console.log("hellos");
// 	},
// 	hi: function () {
// 		console.log("hi");
// 	},
// }; // {} - objekto notacija

// objektas.hi();

class Person {
  // name;
  // height;
  // nationality = "Lithuanian";
  static countOfPeople = 0;
  constructor(name, height) {
    //konstruktoriaus paskirtis - nustatyti objekto laukus
    // funkcija - iškviečiama susikuriant naujam objektui
    this.name = name;
    this.height = height;
    this.nationality = "Lithuanian";
    Person.countOfPeople++;
  }

  //Metodas
  sayHello() {
    console.log(`Labas, aš ${this.name}`);
  }

  //Statinis metodas
  static countArea(height, width) {
    console.log(width * height);
  }
}

//Naujo objekto, pasinaudojant klase sukūrimas
const petras = new Person("Petras", 1.87);
const egle = new Person("Egle", 1.71);

//objekto metodų panaudojimas
petras.sayHello();
egle.sayHello();

//Statiniai metodai, savybes - kreipiamės į juos per klasę
Person.countArea(4, 5);
console.log(Person.countOfPeople);

// 2. Write a JavaScript program to create a class called 'Circle'
// with property for radius.
// Include two getters to calculate Circle area and perimeter.
// Create an instance of the 'Circle' class and calculate its area
// and perimeter.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const circleK = new Circle(7);
console.log(circleK.area);
console.log(circleK.perimeter);

// Write a JavaScript program that creates a class
// called "BankAccount" with properties for account number
// and balance. Include methods to deposit and withdraw
// money from the account. Create some instances of the
// "BankAccount" class, deposit some money, and withdraw
// a portion of it.

class BankAccount {
  //Privati objekto savybė
  //klasės viduje balance - laukas
  #balance;
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.#balance = 0;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance)
      console.log("Nepakanka lėšų. Šiuo metu turite tik " + this.balance + "€");
    else this.#balance -= amount;
  }

  //Inkapsuliacija/Encapsulation
  get balance() {
    return this.#balance;
  }
}

const myBankAccount = new BankAccount("548965416");
myBankAccount["#balance"] += 400;
// myBankAccount.balance -= 410;

myBankAccount.accountNumber; //account number, šioje vietoje - savybė/property
myBankAccount.deposit(400);
myBankAccount.withdraw(390);

console.log(myBankAccount.balance);

// pavyzdziai

class Vehicle {
  // speed, vehicleMake

  constructor(speed, vehicleMake) {
    this.speed = speed;
    this.vehicleMake = vehicleMake;
    this.color = "red";
  }

  horn() {
    console.log("Makes a sound...");
  }
}

class Car extends Vehicle {
  constructor(speed, make, doorCount) {
    super(speed, make);
    this.doorCount = doorCount;
  }

  horn() {
    console.log("BEEEP!");
  }
}

class Bike extends Vehicle {
  constructor(speed, make) {
    super(speed, make);
  }

  horn() {
    console.log("Ring Ring!");
  }
}

class Ship extends Vehicle {
  constructor(speed, make, doorCount) {
    super(speed, make);
    this.doorCount = doorCount;
  }
}

const toyota = new Car(190, "Toyota Auris", 4);
const bmx = new Bike(45, "BMX");
const ship = new Ship(14, "Ship-X", 140);

toyota.horn();
bmx.horn();
ship.horn();

console.log(toyota);
console.log(bmx);
console.log(ship);
