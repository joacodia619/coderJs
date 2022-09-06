const figuritas = document.querySelector('.card')
let offset = 0;
let limit = 7;

const getStickers = async () => {
  const resp = await fetch('../data/data.json')
  const data = await resp.json()
  showStickers(data)
}
const showStickers = (data) => {
  let stickers = []

  for (let i = offset; i <= limit; i++) {
    data[i].push(stickers)
  }
  setTimeout(() => {
    data.forEach((figurita) => {
      const sticker = document.createElement('img')
      sticker.src = `${figurita.imagen}`
      sticker.loading = "lazy"
      figuritas.appendChild(sticker)
    })
  }, 1000)
}
function listStickers() {
  teams = ["FWC - Escpeciales", "FWC - Estadios y Pelota", "Qatar", "Ecuador", "Senegal", "Paises Bajos", "Inglaterra", "Iran", "Estados Unidos",
    "Gales", "Argentina", "Arabia Saudita", "Mexico", "Polonia", "Francia", "Australia", "Dinamarca",
    "Tunez", "España", "Costa Rica", "Alemania", "Japon", "Belgica", "Canada", "Marruecos", "Croacia",
    "Brasil", "Serbia", "Suiza", "Camerun", "Portugal", "Ghana", "Uruguay", "Corea del Sur", "FWC - Museo"]

  const list = document.getElementById("list")

  teams.forEach(el => {
    const li = document.createElement("li")
    li.innerText = `${el}`
    li.className = "item"
    list.appendChild(li)
  })
}
listStickers()
getStickers()
