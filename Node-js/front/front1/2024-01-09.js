const username = document.querySelector("#register-user");
const email = document.querySelector("#register-email");
const password = document.querySelector("#register-password");
const registerButton = document.querySelector("#register-button");

async function register() {
  const promise = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  });
  const response = await promise.json();
}
registerButton.onclick = register;

const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");
const loginButton = document.querySelector("#login-button");

async function login() {
  const promise = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
    }),
  });

  const response = await promise.json();
}

loginButton.onclick = login;
