seleccionesDelMundial = [];
class seleccion {
  constructor(grupo, pais, imagen, cups, bestPlayer) {
    this.grupo = grupo;
    this.pais = pais;
    this.imagen = imagen;
    this.cups = cups;
    this.bestPlayer = bestPlayer;
  }
}
seleccionesDelMundial.push(new seleccion("Grupo A", "Catar", '../img/qatar.png', 0, 'Sebastian Soria'));
seleccionesDelMundial.push(new seleccion("Grupo A", "Ecuador", '../img/ecuador.png', 0, 'Antonio Valencia'));
seleccionesDelMundial.push(new seleccion("Grupo A", "Senegal", '../img/senegal.png', 0, 'Sadio Mané'));
seleccionesDelMundial.push(new seleccion("Grupo A", "Países Bajos", '../img/holanda.png', 0, 'Johan Cruyff'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Inglaterra", '../img/inglaterra.png', 1, 'Wayne Rooney'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Irán", '../img/iran.png', 0, 'Alí Daei'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Estados Unidos", '../img/estadosUnidos.png', 0, 'Landon Donovan'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Gales", '../img/gales.png', 0, 'Gareth Bale'));
seleccionesDelMundial.push(new seleccion("Grupo C", "Argentina", '../img/argentina.png', 2, 'Lionel Messi'));
seleccionesDelMundial.push(new seleccion("Grupo C", "Arabia Saudita", '../img/arabia.png', 0, 'Saeed Al-Owairan'));
seleccionesDelMundial.push(new seleccion("Grupo C", "México", '../img/mexico.png', 0, 'Hugo Sanchez'));
seleccionesDelMundial.push(new seleccion("Grupo C", "Polonia", '../img/polonia.png', 0, 'Robert Lewandovski'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Francia", '../img/francia.jpg', 2, 'Michel Platini'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Australia", '../img/australia.png', 0, 'Tim Cahill'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Dinamarca", '../img/dinamarca.png', 0, 'Peter Schemeichel'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Túnez", '../img/tune.png', 0, 'Issam Jermaa'));
seleccionesDelMundial.push(new seleccion("Grupo E", "España", '../img/españa.png', 1, 'Sergio Ramos'));
seleccionesDelMundial.push(new seleccion("Grupo E", "Costa Rica", '../img/costa.png', 0, 'Keylor Navas'));
seleccionesDelMundial.push(new seleccion("Grupo E", "Alemania", '../img/alemania.png', 4, 'Franz Beckenbauer'));
seleccionesDelMundial.push(new seleccion("Grupo E", "Japón", '../img/japon.png', 0, 'Shiji Kagawa'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Bélgica", '../img/belgica.png', 0, 'Kevin De Bruyne'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Canadá", '../img/canada.png', 0, 'Alphonso Davies'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Marruecos", '../img/morocco.png', 0, 'Achraf Hakimi'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Croacia", '../img/croacia.png', 0, 'Luka Modric'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Brasil", '../img/BRAS.png', 5, 'Pelé'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Serbia", '../img/serbia.png', 0, 'Dejan Stankovic'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Suiza", '../img/suiza.png', 0, 'Xherdan Shaqiri'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Camerún", '../img/camerun.png', 0, 'Samuel Eto'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Portugal", '../img/portugal.png', 0, 'Cristiano Ronaldo'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Ghana", '../img/ghana.png', 0, 'Abedi Pele'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Uruguay", '../img/uruguay.png', 4, 'Luis Suarez'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Corea del Sur", '../img/corea.png', 0, 'Son Heung-Min'));


let button = document.getElementById('button')
button.addEventListener('click', e => {
  let grupo = document.getElementById('inputGrupo').value
  let seleccionesDeGrupo = seleccionesDelMundial.filter(x => x.grupo == grupo)
  let cardDeCartaEnIngles = ''
  seleccionesDeGrupo.forEach(x => {
    const { imagen, pais, cups, bestPlayer } = x
    cardDeCartaEnIngles += `
      <div class="card">
        <div class="front">
          <img src="${imagen}" alt="">
        </div>
        <div class="back">
          <h1>${pais}</h1>
          <h2>${cups} world cups</h2>
          <p>Best player ever: ${bestPlayer}</p>
        </div>
      </div>`
    document.getElementById('selecciones').innerHTML = cardDeCartaEnIngles
  });

})
