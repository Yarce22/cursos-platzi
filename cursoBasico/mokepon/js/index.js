const inputHipodoge = document.querySelector('#hipodoge');
const inputCapipepo = document.querySelector('#capipepo');
const spanMascotaJugador = document.querySelector('#mascota-jugador');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');
const botonFuego = document.querySelector('#boton-fuego');
const botonAgua = document.querySelector('#boton-agua');
const botonTierra = document.querySelector('#boton-tierra');
const mensajes = document.querySelector('#mensajes');
const vidasJugador = document.querySelector('#vidas-jugador');
const vidasEnemigo = document.querySelector('#vidas-enemigo');
const parrafo = document.createElement('p');

let ataqueJugador;
let ataqueEnemigo;

const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const seleccionarMascotaEnemigo = () => {
  let mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria === 1) {
    alert('La mascota del enemigo es el Hipodoge');
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (mascotaAleatoria === 2) {
    alert('La mascota del enemigo es el Capipepo');
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  } else {
    alert('La mascota del enemigo es el Ratigueya');
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  }
}

const seleccionarMascota = () => {
  if (inputHipodoge.checked) {
    alert('Seleccionaste a Hipodoge');
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if (inputCapipepo.checked) {
    alert('Seleccionaste a Capipepo');
    spanMascotaJugador.innerHTML = 'Capipepo';
  } else {
    alert('Seleccionaste a Ratigueya');
    spanMascotaJugador.innerHTML = 'Ratigueya';
  }

  seleccionarMascotaEnemigo();
};

const combate = () => {
  if (ataqueJugador === ataqueEnemigo) {
    alert('EMPATE!');
    return 'EMPATE!';
  } else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
    alert('GANASTE!');
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE!';
  } else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
    alert('GANASTE!');
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE!';
  } else if (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
    alert('GANASTE!');
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE!';
  } else {
    alert('PERDISTE!');
    vidasJugador.innerHTML -= 1;
    return 'PERDISTE!';
  }
}

const crearMensaje = () => {
  parrafo.innerText = `${spanMascotaJugador.innerHTML} ataca con ${ataqueJugador}, ${spanMascotaEnemigo.innerHTML} ataco con ${ataqueEnemigo} - ${combate()}!`;
  mensajes.appendChild(parrafo);

  if (vidasJugador.innerHTML == 0) {
    parrafo.innerText = `EL GANADOR ES ${spanMascotaEnemigo.innerHTML}!`;
  } else if (vidasEnemigo.innerHTML == 0) {
    parrafo.innerText = `EL GANADOR ES ${spanMascotaJugador.innerHTML}!`;
  }
}

const ataqueEnemigoAleatorio = () => {
  const ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio === 1) {
    alert(`${spanMascotaEnemigo.innerHTML} ataca con FUEGO`)
    ataqueEnemigo = 'FUEGO';
  } else if (ataqueAleatorio === 2) {
    alert(`${spanMascotaEnemigo.innerHTML} ataca con AGUA`)
    ataqueEnemigo = 'AGUA'
  } else {
    alert(`${spanMascotaEnemigo.innerHTML} ataca con TIERRA`)
    ataqueEnemigo = 'TIERRA'
  }
}

const ataqueFuego = () => {
  ataqueJugador = `FUEGO`;
  alert(`${spanMascotaJugador.innerHTML} ataca con ${ataqueJugador}`);

  ataqueEnemigoAleatorio();
  crearMensaje();
}

const ataqueAgua = () => {
  ataqueJugador = `AGUA`;
  alert(`${spanMascotaJugador.innerHTML} ataca con ${ataqueJugador}`);

  ataqueEnemigoAleatorio();
  crearMensaje();
}

const ataqueTierra = () => {
  ataqueJugador = `TIERRA`;
  alert(`${spanMascotaJugador.innerHTML} ataca con ${ataqueJugador}`);

  ataqueEnemigoAleatorio();
  crearMensaje();
}

const iniciarJuego = () => {
  let botonMascota = document.querySelector('#boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascota);

  botonAgua.addEventListener('click', ataqueAgua);
  botonFuego.addEventListener('click', ataqueFuego);
  botonTierra.addEventListener('click', ataqueTierra);
};

window.addEventListener('load', iniciarJuego);
