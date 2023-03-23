  // Seleccionar vocal
  //let options = ["Option 1", "Option 2", "Option 3"];
  //let selectedOption = prompt("Please select an option:\n" + options.join("\n"));
  //selectedOption = vocal;
  //document.getElementById("vocal").textContent = vocal;

  // Preguntas para el usuario

  // funcion switch para elegir vocal
  function elegirVariable(variable1, variable2, variable3, variable4) {
    let opcion = prompt(`Por favor, elige una opción:\n1. ${variable1}\n2. ${variable2}\n3. ${variable3}\n4. ${variable4}`);
  
    switch (opcion) {
    case "1":
        return variable1;
    case "2":
        return variable2;
    case "3":
        return variable3;
    case "4":
        return variable4;
    default:
        return "Opción inválida";
    }
  }
    //continuacion de funcion elegir vocal
    // uso: miVariable es la que hay que llamar en el HTML
  
    let miVariable = elegirVariable("Everardo", "Mario", "Guillermo", "Exequiel");
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
  perito = prompt("Perito Médico:");
  jus = prompt("Cuanto jus para el perito médico: ");
  
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
  var result = "$ " + jusNum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  
  document.getElementById("result").textContent = result;
  console.log(result);
  
    // aportes
  
  numAportes = jusNum * 0.15;
  let aportes = numAportes.toFixed(2);
  console.log(aportes);
  var resultAportes = "$ " + numAportes.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  console.log(resultAportes);
  
      // Actualiza los span
      document.getElementById("fecha").textContent = fecha;
      document.getElementById("autos").textContent = autos;
      document.getElementById("expteNum").textContent = expteNum;
      document.getElementById("actor").textContent = actor;
      document.getElementById("actorUno").textContent = actorUno;
      document.getElementById("dniUno").textContent = dniUno;
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