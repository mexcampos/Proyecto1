  // Preguntas para el usuario
const date = prompt("Fecha (dd/mm/aaaa):");
const autos = prompt("Carátula de los autos (sin comillas):");
const expte_num = prompt("Número de expediente:");
const abogado = prompt("Nombre del abogado:");
var base = prompt("Base Regulatoria:");
const fecha_intereses = prompt("Fecha inicio cómputo de intereses:");
var intereses = prompt("Monto de intereses");

  // Aca quiero sumar los valores base + intereses; no se como hacer para que me reconozcan a esos valores como numeros
let total = base + intereses

  // funcion para determinar mas de una vez "abogado" en el texto
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
document.getElementById("fecha_intereses").textContent = fecha_intereses;
document.getElementById("intereses").textContent = intereses;
document.getElementById("total").textContent = total;
