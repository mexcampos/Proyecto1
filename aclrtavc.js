// funcion switch para elegir vocal
function elegirVocal() {
  let opcion = prompt(`Por favor, elige una vocal:\n1. Cristián Requena\n2. María Cecilia Busleiman\n3. Sofía Andrea Keselman\n`);
  switch (opcion) {
    case "1":
      return "Cristián Requena";
    case "2":
      return "María Cecilia Busleiman";
    case "3":
      return "Sofía Andrea Keselman";
    default:
      return "Opción inválida";
  }
}

//continuacion de funcion elegir vocal
let vocalElegida = elegirVocal();
console.log("La vocal elegida fue: " + vocalElegida);
alert("La vocal elegida fue: " + vocalElegida);
    
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
//import numberToSpanishWords from 'number-to-spanish-words';

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
const valorJus = 5968.91;
var honPerMedNum = parseInt(jus) * valorJus;
console.log(honPerMedNum);
var honPerMedNumResult = "$ " + honPerMedNum.toLocaleString('de-DE', {minimumFractionDigits: 2,maximumFractionDigits: 2});
console.log(honPerMedNumResult);
  
// aportes
numAportes = honPerMedNum * 0.15;
console.log(numAportes);
var resultAportes = "$ " + numAportes.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(resultAportes);

// IVA perito
numIvaPerito = honPerMedNum * 0.21;
console.log(numIvaPerito);
var resultIvaPerito = "$ " + numIvaPerito.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(resultIvaPerito);

// Habria que hacer una funcion if-else para elegir si hay que regular los honorarios del abogado o si están previamente estipulados
const regAb = prompt("¿Se debe regular honorarios al letrado del actor? si/no");
if (regAb === "si") {
    const porcRegAb = prompt("En qué porcentaje? Usar decimales con punto");
    var honAbActorNum = baseAcuerdo * parseFloat(porcRegAb) / 100;
} else {
    var honAbActorNumNo = prompt("Monto de honorarios acordados: ");
    honAbActorNum = honAbActorNumNo * 1;
}
var honAbActorResult = "$ " + honAbActorNum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(honAbActorResult);

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
document.getElementById("vocalElegida").textContent = vocalElegida;
document.getElementById("honPerMedNumResult").textContent = honPerMedNumResult;
document.getElementById("honPerMedLet").textContent = honPerMedLet;
document.getElementById("honAbActorResult").textContent = honAbActorResult;
document.getElementById("resultIvaPerito").textContent = resultIvaPerito;
document.getElementById("tasaResult").textContent = tasaResult;
document.getElementById("tasaMinimoLetras").textContent = tasaMinimoLetras;
document.getElementById("colegioResult").textContent = colegioResult;
document.getElementById("colegioMinimoLetras").textContent = colegioMinimoLetras;