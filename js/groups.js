SuarezEnNacional = [];
class seleccion {
  constructor(grupo, pais, imagen) {
    this.grupo = grupo;
    this.pais = pais;
    this.imagen = imagen;
  }
}
SuarezEnNacional.push(new seleccion("Grupo A", "Catar", '../images/Catar.gif'));
SuarezEnNacional.push(new seleccion("Grupo A", "Ecuador", '../images/Ecuador.jpg'));
SuarezEnNacional.push(new seleccion("Grupo A", "Senegal", '../images/Senegal.png'));
SuarezEnNacional.push(new seleccion("Grupo A", "Países Bajos", '../images/PaisesBajos.png'));
SuarezEnNacional.push(new seleccion("Grupo B", "Inglaterra", '../images/Inglaterra.jpg'));
SuarezEnNacional.push(new seleccion("Grupo B", "Irán", '../images/Iran.png'));
SuarezEnNacional.push(new seleccion("Grupo B", "Estados Unidos", '../images/EstadosUnidos.jpg'));
SuarezEnNacional.push(new seleccion("Grupo B", "Gales", '../images/Gales.png'));
SuarezEnNacional.push(new seleccion("Grupo C", "Argentina", '../images/Argentina.jpg'));
SuarezEnNacional.push(new seleccion("Grupo C", "Arabia Saudita", '../images/ArabiaSaudita.png'));
SuarezEnNacional.push(new seleccion("Grupo C", "México", '../images/Mexico.jpg'));
SuarezEnNacional.push(new seleccion("Grupo C", "Polonia", '../images/Polonia.png'));
SuarezEnNacional.push(new seleccion("Grupo D", "Francia", '../images/Francia.jpg'));
SuarezEnNacional.push(new seleccion("Grupo D", "Australia", '../images/Australia.jpg'));
SuarezEnNacional.push(new seleccion("Grupo D", "Dinamarca", '../images/Dinamarca.png'));
SuarezEnNacional.push(new seleccion("Grupo D", "Túnez", '../images/Tunez.png'));
SuarezEnNacional.push(new seleccion("Grupo E", "España", '../images/España.jpg'));
SuarezEnNacional.push(new seleccion("Grupo E", "Costa Rica", '../images/CostaRica.jpg'));
SuarezEnNacional.push(new seleccion("Grupo E", "Alemania", '../images/Alemania.jpg'));
SuarezEnNacional.push(new seleccion("Grupo E", "Japón", '../images/Japon.png'));
SuarezEnNacional.push(new seleccion("Grupo F", "Bélgica", '../images/Belgica.png'));
SuarezEnNacional.push(new seleccion("Grupo F", "Canadá", '../images/Canada.png'));
SuarezEnNacional.push(new seleccion("Grupo F", "Marruecos", '../images/Marruecos.png'));
SuarezEnNacional.push(new seleccion("Grupo F", "Croacia", '../images/Croacia.png'));
SuarezEnNacional.push(new seleccion("Grupo G", "Brasil", '../images/Brasil.png'));
SuarezEnNacional.push(new seleccion("Grupo G", "Serbia", '../images/Serbia.png'));
SuarezEnNacional.push(new seleccion("Grupo G", "Suiza", '../images/Suiza.png'));
SuarezEnNacional.push(new seleccion("Grupo G", "Camerún", '../images/Camerun.png'));
SuarezEnNacional.push(new seleccion("Grupo H", "Portugal", '../images/Portugal.png'));
SuarezEnNacional.push(new seleccion("Grupo H", "Ghana", '../images/Ghana.png'));
SuarezEnNacional.push(new seleccion("Grupo H", "Uruguay", '../images/Uruguay.jpg'));
SuarezEnNacional.push(new seleccion("Grupo H", "Corea del Sur", '../images/CoreaDelSur.jpg'));
function mostrarSelecciones() {
  let selecciones = [];
  for (const paises of SuarezEnNacional) {
    selecciones.push(paises.pais);
  }
  alert(selecciones.join(" - "));
}
function grupoYEnfrentamientos() {
  let seleccionElegida = prompt('Te mostramos el grupo de la selección que elijas(de las mostradas anteriormente) de la FIFA World Cup Qatar 2022, si no desea seguir buscando entonces escriba (0)');
  let grupos = SuarezEnNacional.filter(x => x.grupo == SuarezEnNacional.find(x2 => x2.pais == seleccionElegida).grupo)
  console.log(grupos)
  alert('Estas son las banderas de los equipos que están en el grupo de la selección que elegiste =)')
  plantillaYaSabeNacionalNacional(grupos)

}
function plantillaYaSabeNacionalNacional(grupos) {
  let paraUsarEnPlantilla = document.getElementById("paraUsarEnPlantilla")
  let noMeLaContainer = `
    <img src="${grupos[0].imagen} " /> 
    <img src="${grupos[1].imagen} " />
    <img src="${grupos[2].imagen} " />
    <img src="${grupos[3].imagen} " />`
  console.log(noMeLaContainer)
  paraUsarEnPlantilla.innerHTML = noMeLaContainer
}
mostrarSelecciones()
grupoYEnfrentamientos()
