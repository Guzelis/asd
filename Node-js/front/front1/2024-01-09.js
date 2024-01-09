const username = document.querySelector("#register-user");
const email = document.querySelector("#register-email");
const password = document.querySelector("#register-password");
const registerButton = document.querySelector("#register-button");

async function register() {
  const promise = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "awd",
      email: "lopas@email.com",
      password: "123",
    }),
  });
  const response = await promise.json();
}
registerButton.onclick = register;
