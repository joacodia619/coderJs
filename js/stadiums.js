let optionList = [];
class estadio {
  constructor(name, capacity, imagen, city) {
    this.name = name;
    this.capacity = capacity;
    this.imagen = imagen;
    this.city = city;
  }
}
optionList.push(new estadio("Ahmad bin Ali", "50.000", "../images/AHMED\ BIN\ ALI.png", "Rayan"))
optionList.push(new estadio("Al Bayt", "60.000", "../images/Al-Bayt-Stadium.png", "Jor"))
optionList.push(new estadio("Al Janoub", "40.000", "../images/AL\ JANOUB.png", "Al Wakrah"))
optionList.push(new estadio("Al Thumama", "40.000", "../images/AL\ THUMAMA.png", "Doha"))
optionList.push(new estadio("Education City", "45.350", "../images/CIUDAD\ DE\ LA\ EDUCACIÓN.png", "Ar Rayyan"))
optionList.push(new estadio("Khalifa International", "50.000", "../images/INTERNACIONAL\ KHALIFA.png", "Al Waab St"))
optionList.push(new estadio("Lusail", "80.000", "../images/ICÓNICO\ DE\ LUSAIL.png", "Lusail"))
optionList.push(new estadio("Ras Abu Abound", "40.000", "../images/Estadio\ 974.png", "Doha"))

let options = document.getElementById('options')
optionList.forEach(element => {
  let option = document.createElement("option");
  option.innerText = element.name;
  option.setAttribute('value', element.name)
  options.firstElementChild.insertAdjacentElement("afterend", option);
})


let button = document.getElementById("button");
button.addEventListener('click', x => {
  let option = options.options[options.selectedIndex].text;
  let result = optionList.find(x => x.name == option)
  const { name, capacity, imagen, city } = result
  Swal.fire({
    title: `${name}`,
    text: `Capacity: ${capacity}`,
    imageUrl: `${imagen}`,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    background: '#860037',
    color: 'white'
  })
})

// })
//  = Swal.fire({
//   title: '${imagen}',
//   text: 'Modal with a custom image.',
//   imageUrl: '${imagen}',
//   imageWidth: 400,
//   imageHeight: 200,
//   imageAlt: 'Custom image',
// })
// button.addEventListener('click', e => {
  //   let grupo = document.getElementById('inputGrupo').value
  //   let seleccionesDeGrupo = seleccionesDelMundial.filter(x => x.grupo == grupo)
  //   let cardDeCartaEnIngles = ''
  //   seleccionesDeGrupo.forEach(x => {
    //     const { imagen, pais, cups, bestPlayer } = x
//     cardDeCartaEnIngles += `
//       <div class="card">
//         <div class="front">
//           <img src="${imagen}" alt="">
//         </div>
//         <div class="back">
//           <h1>${pais}</h1>
//           <h2>${cups} world cups</h2>
//           <p>Best player ever: ${bestPlayer}</p>
//         </div>
//       </div>`
//     document.getElementById('selecciones').innerHTML = cardDeCartaEnIngles
//   });

// })
