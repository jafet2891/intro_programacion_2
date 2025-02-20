/*
  --------------------------------------------------------
  PROGRAMA: Calculadora de Signo Zodiacal
  --------------------------------------------------------
  1) Solicita al usuario su día y mes de nacimiento.
  2) Determina el signo zodiacal según las fechas.
  3) Muestra en pantalla (alert) el signo y un pronóstico.
  4) Maneja los casos en que el usuario ingrese datos no válidos.
  --------------------------------------------------------
*/

// 1) Pedir al usuario el día de nacimiento.
//    El prompt devuelve un string, así que usamos parseInt para convertirlo a número.
var diaString = prompt("Ingresa tu día de nacimiento (solo número).");
var dia = parseInt(diaString, 10);

// 2) Pedir al usuario el mes de nacimiento.
var mesString = prompt("Ingresa tu mes de nacimiento (solo número).");
var mes = parseInt(mesString, 10);

/**
 * Función que determina el signo zodiacal con base en día y mes.
 * Retorna un string con el nombre del signo o un mensaje de error.
 */
function obtenerSignoZodiacal(dia, mes) {
  /*
    Las fechas aproximadas (tropical) son:
    Aries:       21 mar - 19 abr
    Tauro:       20 abr - 20 may
    Géminis:     21 may - 20 jun
    Cáncer:      21 jun - 22 jul
    Leo:         23 jul - 22 ago
    Virgo:       23 ago - 22 sep
    Libra:       23 sep - 22 oct
    Escorpio:    23 oct - 21 nov
    Sagitario:   22 nov - 21 dic
    Capricornio: 22 dic - 19 ene
    Acuario:     20 ene - 18 feb
    Piscis:      19 feb - 20 mar
  */

  // Validamos si el día o el mes son inválidos antes de comparar.
  if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    return "Datos no válidos";
  }

  // Aries
  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    return "Aries";
  }
  // Tauro
  else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    return "Tauro";
  }
  // Géminis
  else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    return "Géminis";
  }
  // Cáncer
  else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    return "Cáncer";
  }
  // Leo
  else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    return "Leo";
  }
  // Virgo
  else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    return "Virgo";
  }
  // Libra
  else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    return "Libra";
  }
  // Escorpio
  else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    return "Escorpio";
  }
  // Sagitario
  else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    return "Sagitario";
  }
  // Capricornio
  else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
    return "Capricornio";
  }
  // Acuario
  else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    return "Acuario";
  }
  // Piscis
  else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    return "Piscis";
  }
  else {
    return "Fecha fuera de rango";
  }
}

// Llamamos a la función para obtener el signo zodiacal.
var signo = obtenerSignoZodiacal(dia, mes);

// Definimos un pronóstico sencillo para cada signo en un objeto (diccionario).
var mensajes = {
  "Aries":       "Tu energía te abrirá nuevas puertas hoy.",
  "Tauro":       "Tendrás la oportunidad de relajarte y disfrutar de algo especial.",
  "Géminis":     "La curiosidad te llevará a descubrir algo interesante.",
  "Cáncer":      "La empatía será tu mejor aliada el día de hoy.",
  "Leo":         "Tu carisma brillará y atraerás buenas noticias.",
  "Virgo":       "Organizar tus ideas te ayudará a encontrar claridad.",
  "Libra":       "El balance que buscas llegará con una buena conversación.",
  "Escorpio":    "Una pasión oculta podría despertar, aprovéchala.",
  "Sagitario":   "Una nueva aventura se acerca, mantén la mente abierta.",
  "Capricornio": "La disciplina que siembres hoy dará frutos pronto.",
  "Acuario":     "Tu originalidad te hará destacar en un proyecto.",
  "Piscis":      "Tu imaginación te llevará a soñar en grande."
};

// Mostramos el resultado final en una alerta:
// - Si es un signo conocido, mostramos signo + pronóstico.
// - Si no, mostramos el error que devolvió la función.
if (mensajes[signo]) {
  alert("Tu signo zodiacal es: " + signo + "\n" + mensajes[signo]);
} else {
  alert(signo);
}