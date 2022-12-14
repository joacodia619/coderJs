const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
  const arraySuccess = document.getElementsByClassName('success')
  if (arraySuccess.length == 4) {
    location.href = "../index.html"
  }
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  /*if (usernameValue === '') {
    setErrorFor(username, 'Username is required.');
  } else {
    setSuccessFor(username);
  }*/
  usernameValue === '' ? setErrorFor(username, 'Username is required.') : setSuccessFor(username)

  if (emailValue === '') {
    setErrorFor(email, 'Email is required.');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Invalid email format');
  } else {
    setSuccessFor(email);
  }
  passwordValue === '' ? setErrorFor(password, 'Password is required.') : setSuccessFor(password)
  /* if (passwordValue === '') {
    setErrorFor(password, 'Password is required.');
  } else {
    setSuccessFor(password);
  }*/

  if (password2Value === '') {
    setErrorFor(password2, 'Password2 is required.');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
  }
  const enJSON1 = JSON.stringify(usernameValue)
  const enJSON2 = JSON.stringify(emailValue)
  const enJSON3 = JSON.stringify(passwordValue)
  sessionStorage.setItem("Nombre de usuario", enJSON1)
  sessionStorage.setItem("Mail", enJSON2)
  sessionStorage.setItem("Contraseña", enJSON3)
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
