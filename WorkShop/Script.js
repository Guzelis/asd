let loginName = "Petras";
let passwordAsd = "361231";
let btn = document.querySelector("#btn");
let userNameValue = document.querySelector("#userName");
let passValue = document.querySelector("#pass");
btn.addEventListener("click", login);

function login() {
  let user = userNameValue.value;
  let pass = passValue.value;

  if (loginName === user && passwordAsd === pass) {
    console.log("Prisijungete sekmingai");
  } else {
    console.log("Prisijungimo duomenys yra blogi");
  }
}
