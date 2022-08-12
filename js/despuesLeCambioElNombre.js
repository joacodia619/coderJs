let nombre = JSON.parse(sessionStorage.getItem("Nombre de usuario"))
if (nombre !== '') {
  document.getElementById('login').innerText = `Hola ${nombre}`
} else {
  document.getElementById('login').innerText = `Log in`
}