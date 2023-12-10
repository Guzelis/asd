let btn = document.querySelector("#btn");
btn.addEventListener("click", calculate);

function calculate() {
  let num1 = parseFloat(document.querySelector("#num1").value);
  let num2 = parseFloat(document.querySelector("#num2").value);
  let rez = document.querySelector("#rez");
  let operation = document.querySelector(`#operation`).value;

  if (isNaN(num1) || isNaN(num2)) {
    rez.innerHTML =
      "Operacija negali buti atlikta, kadangi vienas iš skaičių yra neįvestas";
    return;
  }

  if (operation === "+") rez.innerText = num1 + num2;
  else if (operation === "-") rez.innerText = num1 - num2;
  else if (operation === "*") rez.innerText = num1 * num2;
  else if (operation === "/" && num2 !== 0) rez.innerText = num1 / num2;
  else if (operation === "**") {
    if (num1 === 0 && num2 <= 0)
      rez.innerText =
        "Jei pirmasis skaičius yra nulis o kitas yra negatyvus skaičius arba lygus nuliui, negalime atlikti operacijos";
    else {
      rez.innerText = num1 ** num2;
    }
  }
}
