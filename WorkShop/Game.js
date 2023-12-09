function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let btn = document.querySelector("#btn");
let numb = rand(1, 20),
  count = 6;

btn.addEventListener("click", guessNumber);

function guessNumber() {
  let guessNumberValue = document.querySelector("#guess-number");
  let TotalguessValue = document.querySelector("#total-guess");
  let rez = document.querySelector("#rez");
  let guessNumber = guessNumberValue.value;

  if (count === 0) {
    rez.innerHTML = `Spėjimų skaičius baigėsi, bandykite dar kartą perkrovę puslapį`;
    return;
  }

  count--;
  TotalguessValue.innerHTML = count;
  if (guessNumber < numb) {
    rez.innerHTML = `Spėjimas buvo neteisingas, ieškomas skaičius yra didesnis`;
  } else if (guessNumber > numb) {
    rez.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra mazesnis`;
  } else {
    rez.innerText = `Teisingas spejimas po ${6 - count}`;
  }
}
