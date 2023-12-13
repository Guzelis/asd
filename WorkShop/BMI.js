const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const calculate = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const rez = document.querySelector(".rez");

calculate.addEventListener("click", calBMI);

function calBMI(e) {
  e.preventDefault();

  heightValue = height.value;
  weightValue = weight.value;

  if (!heightValue || isNaN(heightValue)) {
    return (rez.innerHTML = "Provide a valid height");
  } else if (!weightValue || isNaN(weightValue)) {
    return (rez.innerHTML = "Provide a valid weight");
  } else {
    let heightMeters = heightValue / 100;
    let bmi = (weightValue / Math.pow(heightMeters, 2)).toFixed(2);

    if (bmi < 18.5) {
      showResults(`Underweight: <span>${bmi}</span>`, "orange");
    }
    if (bmi > 18.5 && bmi < 25) {
      showResults(`Normal: <span>${bmi}</span>`, "green");
    }
    if (bmi > 25 && bmi < 30) {
      showResults(`Overweight: <span>${bmi}</span>`, "yellow");
    }
    if (bmi > 30) {
      showResults(`Obese: <span>${bmi}</span>`, "red");
    }
  }
}

function showResults(value, color) {
  rez.style.backgroundColor = color;
  return (rez.innerHTML = value);
}

reset.addEventListener("click", function () {
  document.querySelector(".height").value = "";
  document.querySelector(".weight").value = "";
  rez.innerHTML = "";
});
