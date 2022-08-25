const figuritas = document.querySelector('.card')
const getStickers = async () => {

  const resp = await fetch('../data/data.json')
  const data = await resp.json()
  showStickers(data)
}
const showStickers = (data) => {
  setTimeout(() => {
    data.forEach((figurita) => {
      const sticker = document.createElement('img')
      sticker.src = `${figurita.imagen}`
      sticker.loading = "lazy"
      figuritas.appendChild(sticker)
    })
  }, 1000)
}
getStickers()
