async function checkSession() {
  try {
    const promise = await fetch("http://localhost/server/user/session-check", {
      credentials: "include",
    });
    const answer = await promise.json();
    if (answer.sessionValid) {
      window.location.href = "http://localhost/Node-js/front/front1/todos.html";
    }
  } catch (error) {
    console.log(error);
  }
}
checkSession();

const username = document.querySelector("#register-user");
const email = document.querySelector("#register-email");
const password = document.querySelector("#register-password");
const registerButton = document.querySelector("#register-button");

async function register() {
  const promise = await fetch("http://localhost/server/users/register", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  });
  const response = await promise.text();
  console.log(response);
}
registerButton.onclick = register;

const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");
const loginButton = document.querySelector("#login-button");

async function login() {
  fetch("http://localhost/server/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
    }),
  })
    .then((response) => response.json())
    .then((response) => (window.location.href = response.url))
    .catch((err) => console.log(err));

  // window.location.href =
  //   "http://127.0.0.1:5500/Node-js/front/front1/todos.html";
}

loginButton.onclick = login;
