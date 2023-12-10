let loginName = "Petras";
let passwordAsd = "361231";
let btn = document.querySelector("#btn");

btn.addEventListener("click", login);

function login() {
  let userNameValue = document.querySelector("#userName").value;
  let passValue = document.querySelector("#pass").value;

  if (loginName === userNameValue && passwordAsd === passValue) {
    console.log("Prisijungete sekmingai");
  } else {
    console.log("Prisijungimo duomenys yra blogi");
  }
}
//let user = userNameValue.value;
//let pass = passValue.value;
