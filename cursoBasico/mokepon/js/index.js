const inputHipodoge = document.querySelector('#hipodoge');
const inputCapipepo = document.querySelector('#capipepo');
const spanMascotaJugador = document.querySelector('#mascota-jugador');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');

const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const seleccionarMascotaEnemigo = () => {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio === 1) {
    alert('La mascota del enemigo es el Hipodoge');
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (ataqueAleatorio === 2) {
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

const iniciarJuego = () => {
  let botonMascota = document.querySelector('#boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascota);
};

window.addEventListener('load', iniciarJuego);
