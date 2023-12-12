const people = [];
let currentNumeration = 0;
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const person = {};

  currentNumeration++;
  person.firstName = document.querySelector("#name").value;
  person.lastName = document.querySelector("#last").value;
  person.age = document.querySelector("#age").value;
  person.nationality = document.querySelector("#nation").value;
  if (
    !person.firstName ||
    !person.lastName ||
    !person.age ||
    !person.nationality
  ) {
    return;
  }
  person.number = currentNumeration;
  document.querySelector("#name").value = "";
  document.querySelector("#last").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#nation").value = "";
  people.push(person);
  generateTableContent(people);
});

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
  const number = document.querySelector("#number").value;

  const index = people.findIndex((person) => person.number == number);
  if (index < 0) {
    alert("!!!");
  } else {
    people.splice(index, 1);
    generateTableContent(people);
  }
  document.querySelector("#number").value = "";
});
