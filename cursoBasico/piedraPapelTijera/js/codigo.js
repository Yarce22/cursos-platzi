function aleatorio(min, max) {        
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function election (jugada) {
  let resultado = '';
  if(jugada == 1) {
    resultado = 'piedra 🪨';
  } else if (jugador == 2) {
    resultado = 'papel 📃';
  } else if (jugador == 3) {
    resultado = 'tijeras  ✂️';
  } else {
    resultado = "Mala elección";
  }

  return resultado;
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0;
let perdidas = 0;

while (triunfos < 2 && perdidas < 2) {
  pc = aleatorio(1,3)
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
  // alert("Elegiste " + jugador)
  
  alert('PC elige: ' + election(pc))
  alert('Tu eliges: ' + election(jugador))

  // COMBATE
  if (pc == jugador) {
    alert("EMPATE")
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE")
    triunfos += 1;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE")
    triunfos += 1;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE")
    triunfos += 1;
  } else {
    alert("PERDISTE")
    perdidas += 1;
  }
}

alert("Ganaste " + triunfos + ' veces. Perdiste ' + perdidas + ' veces.')