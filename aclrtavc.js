// funcion switch para elegir vocal
function elegirVariable(variable1, variable2, variable3, variable4) {
  let opcion = prompt(`Por favor, elige una opción:\n1. ${variable1}\n2. ${variable2}\n3. ${variable3}\n`);
  switch (opcion) {
  case "1":
    return variable1;
  case "2":
    return variable2;
  case "3":
    return variable3;
  default:
    return "Opción inválida";
  }
}
//continuacion de funcion elegir vocal
// uso: miVariable es la que hay que llamar en el HTML  
  let miVariable = elegirVariable("Cristián Requena", "María Cecilia Busleiman", "Sofía Andrea Keselman");
  console.log(miVariable);   

//obtencion de la variable que el usuario eligió dentro de la función mi variable
  console.log("La opción elegida fue: " + miVariable);
  prompt("La opción elegida fue: " + miVariable);
  console.log(miVariable);

// ahora miVariable vale la opcion que eligio el usuario
    
// Preguntas para el usuario retomadas
  fecha = prompt("Fecha (dd/mm/aaaa):");
  autos = prompt("Carátula de los autos (sin comillas):");
  expteNum = prompt("Número de expediente:");
  actor = prompt("Nombre del actor/a");
  dni = prompt("DNI del actor/a:");
  abActor = prompt("Abogado del actor:");
  demandada = prompt("Demandada:");
  abDemandada = prompt("Abogado de la demandada:");
  acuerdo = prompt("Acuerdo");
  baseAcuerdo = prompt("Monto del Acuerdo: ");
  perito = prompt("Perito Médico:");
  jus = prompt("Regulación perito (jus): ");
  honAbActor = prompt("Honorarios del abogado del actor (el decimal con puntos): ");


  
// funcion para determinar mas de una vez los id en el texto
  let actorUno = actor;
  let dniUno = dni;  
  let abActorUno = abActor;
  let abActorDos = abActor;
  let abDemandadaUno = abDemandada;
  let abDemandadaDos = abDemandada;
  let demandadaUno = demandada;
  let demandadaDos = demandada;
  let demandadaTres = demandada;
  
  
// funcion para calcular los honorarios del perito médico
jusNum = parseInt(jus) * 5968.91;
console.log(jusNum);
var result = "$ " + jusNum.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
console.log(result);
  
// aportes
numAportes = jusNum * 0.15;
let aportes = numAportes.toFixed(2);
console.log(aportes);
var resultAportes = "$ " + numAportes.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(resultAportes);

// IVA perito
numIvaPerito = jusNum * 0.21;
let ivaPerito = numIvaPerito.toFixed(2);
console.log(aportes);
var resultIvaPerito = "$ " + numIvaPerito.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(resultIvaPerito);

// Honorarios del abogado del actor
honAbActorNum = parseInt(honAbActor) * 1.00;
console.log(honAbActorNum);
var honAbActorResult = "$ " + honAbActorNum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(honAbActorResult);

// Habria que hacer una funcion if-else para elegir si hay que regular los honorarios del abogado o si están previamente estipulados

//Determinar la tasa de justicia
var tasa = parseInt(baseAcuerdo) * 0.02;
var tasaMinimo = 8953.40;
console.log(tasa);
if (tasa > tasaMinimo) {
  var tasaResult = "$ " + tasa.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
console.log(tasaResult);
} else {
  var tasaResult = "$ " + tasaMinimo.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
  var tasaMinimoLetras = "ocho mil novecientos cincuenta y tres con cuarenta";
}
// Determinar los aportes colegiales
var colegio = parseInt(baseAcuerdo) * 0.01;
var colegioMinimo = 2280.00;
console.log(colegio);
if (colegio > colegioMinimo) {
  var colegioResult = "$ " + colegio.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
console.log(colegioResult);
} else {
  var colegioResult = "$ " + colegioMinimo.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
  var colegioMinimoLetras = "dos mil doscientos ochenta";
}

// Actualiza los span
document.getElementById("fecha").textContent = fecha;
document.getElementById("autos").textContent = autos;
document.getElementById("expteNum").textContent = expteNum;
document.getElementById("actor").textContent = actor;
document.getElementById("actorUno").textContent = actorUno;
document.getElementById("dniUno").textContent = dniUno;
document.getElementById("abActor").textContent = abActor;
document.getElementById("abActorUno").textContent = abActorUno;
document.getElementById("abActorDos").textContent = abActorDos;
document.getElementById("dni").textContent = dni;
document.getElementById("demandada").textContent = demandada;
document.getElementById("demandadaUno").textContent = demandadaUno;
document.getElementById("demandadaDos").textContent = demandadaDos;
document.getElementById("demandadaTres").textContent = demandadaTres;
document.getElementById("abDemandada").textContent = abDemandada;
document.getElementById("abDemandadaUno").textContent = abDemandadaUno;
document.getElementById("abDemandadaDos").textContent = abDemandadaDos;
document.getElementById("acuerdo").textContent = acuerdo;
document.getElementById("perito").textContent = perito;
document.getElementById("jus").textContent = jus;
document.getElementById("resultAportes").textContent = resultAportes;
document.getElementById("miVariable").textContent = miVariable;
document.getElementById("result").textContent = result;
document.getElementById("honAbActorResult").textContent = honAbActorResult;
document.getElementById("resultIvaPerito").textContent = resultIvaPerito;
document.getElementById("tasaResult").textContent = tasaResult;
document.getElementById("tasaMinimoLetras").textContent = tasaMinimoLetras;
document.getElementById("colegioResult").textContent = colegioResult;
document.getElementById("colegioMinimoLetras").textContent = colegioMinimoLetras;