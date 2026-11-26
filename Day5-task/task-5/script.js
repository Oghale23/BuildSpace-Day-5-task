const form = document.querySelector("#signup-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
form.addEventListener("submit", function (event) {
  // q2- It tells the browser to not do it's usual
  event.preventDefault();
  // Read the vaulues
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  console.log(name, email, password);
  // clear old messages
  nameError.textContent = "";
  emailError.textContent = "";
  let isValid = true;
  // q4: Required  fields
  if (name === "") {
    nameError.textContent = "Name is required. Please enter your full name.";
    isValid = false;
  }
  if (email === "") {
    emailError.textContent =
      "Email is required. Please enter your email address.";
    isValid = false;
  } else {  
  }
});
