const word = document.querySelector(".text");
const btn = document.querySelector("#btn");
const rez = document.querySelector(".rez");

btn.addEventListener("click", countLetter);

function countLetter() {
  let letterCount = 0;
  let wordValue = word.value;

  for (i = 0; i < wordValue.lenght; i++) {
    let letter = wordValue[i];
    if (letter.match(/[a,e,o,u,i]/)) letterCount++;
  }
}
rez.innerHTML = `${wordValue.toUpperCase} has ${letterCount} vowels`;
