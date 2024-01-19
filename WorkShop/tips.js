const bill = document.querySelector("#bill");
const service = document.querySelector("#service");
const btn = document.querySelector("#btn");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

btn.addEventListener("click", calculate);

function calculate() {
  const billValue = bill.value;
  const servceValue = service.value;

  if (!billValue) {
    return alert("iveskite tinkama saskaita");
  }

  if (billValue <= 0) {
    return alert("iveskite tinkama saskaita");
  }

  const tipValue = tipCalculate(billValue, servceValue);

  const totalCost = +billValue + +tipValue;

  tip.innerHTML = tipValue.toFixed(2) + " $";
  total.innerHTML = totalCost.toFixed(2) + " $";
}

function tipCalculate(bill, selectValue) {
  return bill * (selectValue / 100);
}
