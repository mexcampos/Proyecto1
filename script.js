  // Preguntas para el usuario
const date = prompt("Fecha (dd/mm/aaaa):");
const autos = prompt("Carátula de los autos (sin comillas):");
const expte_num = prompt("Número de expediente:");
const abogado = prompt("Nombre del abogado:");
const base = prompt("Base Regulatoria:");

let abogadoDos = abogado
let abogadoTres = abogado

  // Actualiza los span
document.getElementById("date").textContent = date;
document.getElementById("autos").textContent = autos;
document.getElementById("expte_num").textContent = expte_num;
document.getElementById("abogado").textContent = abogado;
document.getElementById("abogadoDos").textContent = abogado;
document.getElementById("abogadoTres").textContent = abogado;
document.getElementById("base").textContent = base;

