if (!localStorage.getItem("people")) {
  localStorage.setItem("people", JSON.stringify([])); //JSON.stringify([])
}

const people = JSON.parse(localStorage.getItem("people"));
generateTableContent(people);

if (!localStorage.getItem("currentNumeration")) {
  localStorage.setItem("currentNumeration", 1); //JSON.stringify([])
}

let currentNumeration = +localStorage.getItem("currentNumeration");

const possibleNationalities = ["Lithuanian", "Latvian", "German"];
//const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const person = {};

  person.firstName = document.querySelector("#name").value;
  person.lastName = document.querySelector("#last").value;
  person.age = +document.querySelector("#age").value;
  person.nationality = document.querySelector("#nation").value;
  person.number = currentNumeration;

  // ar ivestos reiksmes yra tuscios
  if (
    !validateName(person.firstName) ||
    !validateName(person.lastName) ||
    !validateAge(person.age) ||
    !isValidNationality(person.nationality)
  ) {
    alert("Prašome užpildyti visus laukus");
    return;
  }

  document.querySelector("#name").value = "";
  document.querySelector("#last").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#nation").value = "";
  people.push(person);
  currentNumeration++;
  localStorage.setItem("currentNumeration", "" + currentNumeration);

  localStorage.setItem("people", JSON.stringify(people));
  generateTableContent(people);
});

function isValidNationality(nationality) {
  return possibleNationalities.includes(nationality);
}

function validateAge(age) {
  let isValid = true;

  if (!age) {
    isValid = false;
  }
  if (isNaN(parseInt(age))) {
    isValid = false;
  }
  if (age < 0 || age > 200) {
    isValid = false;
  }
  if (age % 1 !== 0) {
    isValid = false;
  }
  return isValid;
}

function validateName(name) {
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

function generateTableContent(people) {
  let dynamicHTML = ``;

  for (let person of people) {
    dynamicHTML += `<tr>            
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
  }
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = dynamicHTML;
}

ntb.addEventListener("click", function () {
  const number = +document.querySelector("#number").value;

  const index = people.findIndex((person) => person.number == number);
  if (index < 0) {
    alert("!!!");
  } else {
    people.splice(index, 1);
    generateTableContent(people);
    localStorage.setItem("people", JSON.stringify(people));
  }
  document.querySelector("#number").value = "";
});

// update
const updateName = document.querySelector("#name-update");
const updateLastname = document.querySelector("#last-update");
const updateAge = document.querySelector("#age-update");
const updateNationality = document.querySelector("#nation-update");

const updateID = document.querySelector("#id");
const idButton = document.querySelector(`[value="Update"]`);

idButton.addEventListener("click", function (event) {
  event.preventDefault();
  const foundIndex = people.findIndex((val) => val.number === +updateID.value);

  if (foundIndex === -1) {
    alert("neegzisstuoja");
    return;
  }

  const person = people[foundIndex];

  if (
    !validateName(updateName.value) ||
    !validateName(updateLastname.value) ||
    !validateAge(updateAge.value) ||
    !isValidNationality(updateNationality.value)
  ) {
    alert("uzpildikite laukus teisingai");
    return;
  }
  people[foundIndex] = {
    number: person.number,
    firstName: updateName.value,
    lastName: updateLastname.value,
    age: updateAge.value,
    nationality: updateNationality.value,
  };
  generateTableContent(people);

  updateName.value = "";
  updateLastname.value = "";
  updateAge.value = "";
  updateNationality.value = "";
  localStorage.setItem("people", JSON.stringify(people));
});
/*
ntb.addEventListener("click", function () {
  const number = document.querySelector("#number").value;
  const fondPerson = people.find((val) => {
    return val.number = +number;
  });

  if(!fondPerson) {
    alert(!!!);
    return
  }

  people.filter((person) => person.number === +number);
});
*/
