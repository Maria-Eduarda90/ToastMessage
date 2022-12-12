const button = document.querySelector(".btn-login");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const title = document.querySelector(".title");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (email.value === "" || !email.value.trim()) {
    return ToatsError("Preencha o campo email");
  } else if (password.value === "" || !password.value.trim()) {
    return ToatsError("Preencha o campo senha");
  }

  return ToastSuccess("Usuario criado com sucesso");
});

function ToatsError(message) {
  title.innerHTML = message;
  const error = document.querySelector(".snackbar");
  error.classList.add("error");

  setTimeout(function () {
    error.classList.remove("error");
  }, 3000);
}

function ToastSuccess(message) {
  title.innerHTML = message;
  const success = document.querySelector(".snackbar");
  success.classList.add("success");

  setTimeout(function () {
    success.classList.remove("success");
  }, 3000);
}
