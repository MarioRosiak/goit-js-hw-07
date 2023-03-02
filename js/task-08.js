const form = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[type  = "email"]');
const inputPassword = document.querySelector('input[type = "password"]');

const veryfication = (e) => {
  e.preventDefault();

  let Object = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  console.log(Object);
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Uzupełnij wszystkie pola");
  }
  event.currentTarget.reset();
};
form.addEventListener("submit", veryfication);
