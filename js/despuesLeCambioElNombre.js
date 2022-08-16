let nombre = JSON.parse(sessionStorage.getItem("Nombre de usuario"))
nombre !== '' ? document.getElementById('login').innerText = `Hola ${nombre}` : document.getElementById('login').innerText = `Log in`
// if (nombre !== '') {
//  document.getElementById('login').innerText = `Hola ${nombre}`
// } else {
//  document.getElementById('login').innerText = `Log in`
// }