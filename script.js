  // Preguntas para el usuario
const date = prompt("Fecha (dd/mm/aaaa):");
const autos = prompt("Carátula de los autos (sin comillas):");
const expte_num = prompt("Número de expediente:");
const abogado = prompt("Nombre del abogado:");
var base = prompt("Base Regulatoria:");
const fecha_intereses = prompt("Fecha inicio cómputo de intereses:");
var intereses = prompt("Monto de intereses");

  // Aca quiero sumar los valores base + intereses
let total = parseInt(base) + parseInt(intereses) 

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

  // Función para que escriba en palabras los numeros
function convertToLetters() {
  
  // Obtener los numeros
const numUno = document.getElementById("base").value;
const numDos = document.getElementById("intereses").value;
const numTres = document.getElementById("total").value;

  // Definir palabras para cada digito y determinar valor
const unidad = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const decena = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
const veintena = ["", "", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
const centena = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
const places = ["", "mil", "millón", "billón", "trillón"];

  // Convertir los números a letras usando los arrays definidos - PARA REVISAR
let result = "";
let i = 0;
do
{
  const threeDigits = num % 1000;
  const onesDigit = threeDigits % 10;
  const tensDigit = Math.floor(threeDigits / 10) % 10;
  const hundredsDigit = Math.floor(threeDigits / 100) % 10;
  let threeDigitsString = "";

  if (hundredsDigit !== 0)
  {
        threeDigitsString += ones[hundredsDigit] + " hundred ";
  }
  if (tensDigit === 1)
  {
    threeDigitsString += teens[onesDigit] + " ";
  }
  else
  {
    if (tensDigit !== 0) {
      threeDigitsString += tens[tensDigit] + " ";
    }
    if (onesDigit !== 0) {
      threeDigitsString += ones[onesDigit] + " ";
    }
  }
    if (threeDigits !== 0) {
      threeDigitsString += places[i] + " ";
    }

    result = threeDigitsString + result;
    num = Math.floor(num / 1000);
    i++;
}
while (num > 0);

  // Actualizar el resultado con la palabra convertida
document.getElementById("result").textContent = result.trim();
}