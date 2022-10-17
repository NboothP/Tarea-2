// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
////////////////////////////////////////////////////
const miCumple = new Date(1987, 9, 23);
const FechaLibro = new Date(2021, 0, 26);
let libroFavorito = {
  titulo: "Aprendiendo JavaScript: Desde cero hasta ECMAScript 6+",
  autor: "",
  fecha: FechaLibro,
  url: "https://www.amazon.com/-/es/Carlos-Azaustre/dp/B08TZ3HSYZ?tag=mochaglobal20-20&ascsubtag=srctok-c80a92dab3be93d5&btn_ref=srctok-c80a92dab3be93d5",
};
const MyList = [
  'Nicolas',
  35,
  true,
  miCumple,
  libroFavorito
  
]
console.log(MyList);