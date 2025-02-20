function iniciarJuego() {
    let seguirJugando = true;
  
    while (seguirJugando) {
      // 1. La computadora genera un número al azar entre 1 y 9
      const numeroCompu = Math.floor(Math.random() * 9) + 1;
  
      // 2. Pedir al usuario que ingrese un número entre 3 y 6
      //    y validar que esté entre 1 y 9
      let numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"), 10);
  
      while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9) {
        numeroUsuario = parseInt(
          prompt("Número inválido. Ingrese un número entre 3 y 6:"),
          10
        );
      }
  
      // 3. Pedir al usuario que adivine si SU número
      //    es "mayor", "menor" o "igual" al de la computadora
      const adivinanza = prompt(
        '¿Tu número es "mayor", "menor" o "igual" al de la computadora?'
      );
  
      // 4. Determinar realmente si es mayor, menor o igual
      let resultadoReal;
      if (numeroUsuario > numeroCompu) {
        resultadoReal = "mayor";
      } else if (numeroUsuario < numeroCompu) {
        resultadoReal = "menor";
      } else {
        resultadoReal = "igual";
      }
  
      // 5. Comparar la adivinanza del usuario con el resultado real
      const acierto = adivinanza.toLowerCase() === resultadoReal;
  
      // 6. Mostrar resultado con ambos números y si acertó o no
      let mensaje = 
        "La computadora eligió " + numeroCompu +
        ", usted eligió " + numeroUsuario + ".\n" +
        "Su elección es " + adivinanza + ".\n" +
        "Realmente es " + resultadoReal + ".\n";
  
      if (acierto) {
        mensaje += "¡Ha adivinado!";
      } else {
        mensaje += "No ha adivinado.";
      }
      alert(mensaje);
  
      // 7. Preguntar si quiere volver a jugar (SI / NO)
      //    Si NO, salir; si SI, repetir desde el punto 1
      const respuesta = prompt("¿Quiere jugar otra vez? (SI / NO)").toLowerCase();
      if (respuesta === "no") {
        seguirJugando = false;
        alert("¡Gracias por jugar!");
      }
    }
  }
  
  // Llamada para iniciar el juego
  iniciarJuego();  