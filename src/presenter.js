import Saludar from "./Saludar";
import nombre from "./nombre";
import genero from "./genero";
import edad from "./edad";
import idioma from "./idioma";

const nombre_input = document.querySelector("#nombre");
const genero_input = document.querySelector("#genero");
const edad_input = document.querySelector("#edad");
const idioma_input = document.querySelector("#idioma");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre_input.value.trim();
  const generoValue = genero_input.value;
  const edadValue = parseInt(edad_input.value);
  const idiomaValue = idioma_input.value;

  // Validar entradas
  if (!nombreValue || isNaN(edadValue) || !generoValue || !idiomaValue) {
    div.innerHTML = `<p style="color: red;">Por favor, complete todos los campos correctamente.</p>`;
    return;
  }

  // Generar saludo basado en la hora del día
  const saludoHora = generarSaludoPorHora(idiomaValue);

  // Construir el título basado en edad y género
  const titulo = generarTitulo(edadValue, generoValue, idiomaValue);

  // Generar el mensaje de saludo final
  const mensajeSaludo = `${saludoHora}, ${titulo} ${Saludar(nombreValue, generoValue)}`;

  // Mostrar el mensaje en el div
  div.innerHTML = `<p>${mensajeSaludo}</p>`;
});

function generarSaludoPorHora(idioma) {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  if (idioma === "espanol") {
    return (horaActual >= 6 && horaActual < 12) ? "Buenos días" :
           (horaActual >= 12 && horaActual < 18) ? "Buenas tardes" :
           "Buenas noches";
  } else if (idioma === "ingles") {
    return (horaActual >= 6 && horaActual < 12) ? "Good Morning" :
           (horaActual >= 12 && horaActual < 18) ? "Good Afternoon" :
           "Good Night";
  }
  return "";
}

function generarTitulo(edad, genero, idioma) {
  if (idioma === "espanol") {
    return (edad >= 30) ? (genero === "f" ? "Sra." : "Sr.") : (genero === "f" ? "amiga" : "amigo");
  } else if (idioma === "ingles") {
    return (edad >= 30) ? (genero === "f" ? "Mrs." : "Mr.") : "friend";
  }
  return "";
}
