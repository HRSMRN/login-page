const loginButton = document.querySelector(".login-btn");
const signupForm = document.querySelector("#signup");
const loginForm = document.querySelector("#login");

const showDialog = function (line) {
  Swal.fire({
    icon: "success",
    title: line,
    showConfirmButton: false,
    timer: 1500,
  });
};

loginButton.addEventListener("click", (e) => showDialog("You have logged in!"));

const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", (e) => {
  showDialog("You have been registered!");

  signupForm.classList.toggle("hide");
  loginForm.classList.toggle("hide");
});

const showSignupBtn = document.querySelector(".signup-show-btn");

showSignupBtn.addEventListener("click", (e) => {
  signupForm.classList.toggle("hide");
  loginForm.classList.toggle("hide");
});
