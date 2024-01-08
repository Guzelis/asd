const person = {
  firstName: "John",
  lastName: "Doe",
  age: 36,
  nationality: "British",
  isMarried: false,
  kids: ["Sara", "Boston"],
};

// Hello, my name is John Doe, my age is 36, I am British and my kids are Sara, Boston

const greetingText = `Hello, my name is ${person.firstName} ${
  person.lastName
}, my age is ${person.age}, I am ${
  person.nationality
} and my kids are ${person.kids.join(", ")}. And I am ${
  person.isMarried ? "Married" : "Not married"
}`;

const dog = {};

dog.breed = "German Shepherd";
dog.name = "Angela";
dog.age = 7;
dog.colors = ["brown", "black"];

for (let property in dog) {
  console.log(`${property}: ${dog[property]}`);
}
