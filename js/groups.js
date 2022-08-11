seleccionesDelMundial = [];
class seleccion {
  constructor(grupo, pais, imagen) {
    this.grupo = grupo;
    this.pais = pais;
    this.imagen = imagen;
  }
}
seleccionesDelMundial.push(new seleccion("Grupo A", "Catar", '../img/qatar.png'));
seleccionesDelMundial.push(new seleccion("Grupo A", "Ecuador", '../img/ecuador.png'));
seleccionesDelMundial.push(new seleccion("Grupo A", "Senegal", '../img/senegal.png'));
seleccionesDelMundial.push(new seleccion("Grupo A", "Países Bajos", '../img/holanda.png'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Inglaterra", '../img/inglaterra.png'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Irán", '../img/iran.png'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Estados Unidos", '../img/estadosUnidos.png'));
seleccionesDelMundial.push(new seleccion("Grupo B", "Gales", '../img/gales.png'));
seleccionesDelMundial.push(new seleccion("Grupo C", "Argentina", '../img/argentina.png'));
seleccionesDelMundial.push(new seleccion("Grupo C", "Arabia Saudita", '../img/arabia.png'));
seleccionesDelMundial.push(new seleccion("Grupo C", "México", '../img/mexico.png'));
seleccionesDelMundial.push(new seleccion("Grupo C", "Polonia", '../img/polonia.png'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Francia", '../img/francia.jpg'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Australia", '../img/australia.png'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Dinamarca", '../img/dinamarca.png'));
seleccionesDelMundial.push(new seleccion("Grupo D", "Túnez", '../img/tune.png'));
seleccionesDelMundial.push(new seleccion("Grupo E", "España", '../img/españa.png'));
seleccionesDelMundial.push(new seleccion("Grupo E", "Costa Rica", '../img/costa.png'));
seleccionesDelMundial.push(new seleccion("Grupo E", "Alemania", '../img/alemania.png'));
seleccionesDelMundial.push(new seleccion("Grupo E", "Japón", '../img/japon.png'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Bélgica", '../img/belgica.png'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Canadá", '../img/canada.png'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Marruecos", '../img/morocco.png'));
seleccionesDelMundial.push(new seleccion("Grupo F", "Croacia", '../img/croacia.png'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Brasil", '../img/BRAS.png'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Serbia", '../img/serbia.png'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Suiza", '../img/suiza.png'));
seleccionesDelMundial.push(new seleccion("Grupo G", "Camerún", '../img/camerun.png'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Portugal", '../img/portugal.png'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Ghana", '../img/ghana.png'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Uruguay", '../img/uruguay.png'));
seleccionesDelMundial.push(new seleccion("Grupo H", "Corea del Sur", '../img/corea.png'));

// function grupoYEnfrentamientos() {
//   let seleccionElegida = prompt('Te mostramos el grupo de la selección que elijas(de las mostradas anteriormente) de la FIFA World Cup Qatar 2022, si no desea seguir buscando entonces escriba (0)');
//   let grupos = seleccionesDelMundial.filter(x => x.grupo == seleccionesDelMundial.find(x2 => x2.pais == seleccionElegida).grupo)
//   console.log(grupos)
//   alert('Estas son las banderas de los equipos que están en el grupo de la selección que elegiste =)')
//   plantillaYaSabeNacionalNacional(grupos)

// }
// function plantillaYaSabeNacionalNacional(grupos) {
//   let paraUsarEnPlantilla = document.getElementById("paraUsarEnPlantilla")
//   let noMeLaContainer = `
//     <img src="${grupos[0].imagen} " />
//     <img src="${grupos[1].imagen} " />
//     <img src="${grupos[2].imagen} " />
//     <img src="${grupos[3].imagen} " />`
//   console.log(noMeLaContainer)
//   paraUsarEnPlantilla.innerHTML = noMeLaContainer
// }
// mostrarSelecciones()
// grupoYEnfrentamientos()
