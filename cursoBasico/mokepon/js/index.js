const inputHipodoge = document.querySelector('#hipodoge');
const inputCapipepo = document.querySelector('#capipepo');
const spanMascotaJugador = document.querySelector('#mascota-jugador');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');
const botonFuego = document.querySelector('#boton-fuego');
const botonAgua = document.querySelector('#boton-agua');
const botonTierra = document.querySelector('#boton-tierra');
const mensajes = document.querySelector('#resultado');
const divAtaqueJugador = document.querySelector('#ataque-del-jugador');
const divAtaqueEnemigo = document.querySelector('#ataque-del-enemigo');
const vidasJugador = document.querySelector('#vidas-jugador');
const vidasEnemigo = document.querySelector('#vidas-enemigo');
const botonReiniciar = document.querySelector('#boton-reiniciar');
const sectionSeleccionarAtaque = document.querySelector('#seleccionar-ataque');
const sectionReiniciar = document.querySelector('#reiniciar');
const sectionSeleccionarMascota = document.querySelector('.seleccionar-mascota');
const labelTarjetaMokeponHipodoge = document.querySelector('#tarjetaMokepon-hipodoge');
const labelTarjetaMokeponCapipepo = document.querySelector('#tarjetaMokepon-capipepo');
const labelTarjetaMokeponRatigueya = document.querySelector('#tarjetaMokepon-ratigueya');
const sectionVidas = document.querySelector('#section-vidas');
const divBotonesAtaque = document.querySelector('#botones-ataque');
const subtitulo = document.querySelector('#subtitulo-ataque');


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

  sectionSeleccionarMascota.style.display = 'none';
  sectionSeleccionarAtaque.style.display = 'flex';
  sectionVidas.style.display = 'grid';

};

const combate = () => {
  if (ataqueJugador === ataqueEnemigo) {
    alert('EMPATE!');
    return 'EMPATE 🙅‍♂️';
  } else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
    alert('GANASTE!');
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE 🎉';
  } else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
    alert('GANASTE!');
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE 🎉';
  } else if (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
    alert('GANASTE!');
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE 🎉';
  } else {
    alert('PERDISTE!');
    vidasJugador.innerHTML -= 1;
    return 'PERDISTE ❌';
  }
}

const pararJuego = () => {
  botonAgua.removeEventListener('click', ataqueAgua);
  botonAgua.disabled = true;
  botonFuego.removeEventListener('click', ataqueFuego);
  botonFuego.disabled = true;
  botonTierra.removeEventListener('click', ataqueTierra);
  botonTierra.disabled = true;

  subtitulo.style.display = 'none';
  divBotonesAtaque.style.display = 'none';
  sectionReiniciar.style.display = 'flex';
}

const crearMensaje = () => {
  mensajes.innerHTML = combate();
  const nuevoAtaqueDelJugador = document.createElement('p');
  const nuevoAtaqueDelEnemigo = document.createElement('p');

  nuevoAtaqueDelJugador.innerHTML = `${spanMascotaJugador.innerHTML} ataca con ${ataqueJugador}.`;
  nuevoAtaqueDelEnemigo.innerHTML = `${spanMascotaEnemigo.innerHTML} ataca con ${ataqueEnemigo}.`;

  divAtaqueJugador.appendChild(nuevoAtaqueDelJugador);
  divAtaqueEnemigo.appendChild(nuevoAtaqueDelEnemigo);


  if (vidasJugador.innerHTML == 0) {
    mensajes.innerText = `EL GANADOR ES EL ENEMIGO CON ${spanMascotaEnemigo.innerHTML.toUpperCase()}!`;
    pararJuego();
  } else if (vidasEnemigo.innerHTML == 0) {
    mensajes.innerText = `EL GANADOR ES JUGADOR CON ${spanMascotaJugador.innerHTML.toUpperCase()}!`;
    pararJuego();
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

const reiniciarJuego = () => {
  location.reload();
}

const iniciarJuego = () => {
  sectionSeleccionarAtaque.style.display = 'none';
  sectionReiniciar.style.display = 'none';
  sectionVidas.style.display = 'none';

  let botonMascota = document.querySelector('#boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascota);

  labelTarjetaMokeponHipodoge.addEventListener('click', () => {
    labelTarjetaMokeponHipodoge.style.border = 'solid #EAD8B1';
    labelTarjetaMokeponCapipepo.style.border = 'none';
    labelTarjetaMokeponRatigueya.style.border = 'none';
  })
  labelTarjetaMokeponCapipepo.addEventListener('click', () => {
    labelTarjetaMokeponHipodoge.style.border = 'none';
    labelTarjetaMokeponCapipepo.style.border = 'solid #EAD8B1';
    labelTarjetaMokeponRatigueya.style.border = 'none';
  })
  labelTarjetaMokeponRatigueya.addEventListener('click', () => {
    labelTarjetaMokeponHipodoge.style.border = 'none';
    labelTarjetaMokeponCapipepo.style.border = 'none';
    labelTarjetaMokeponRatigueya.style.border = 'solid #EAD8B1';
  })

  botonAgua.addEventListener('click', ataqueAgua);
  botonFuego.addEventListener('click', ataqueFuego);
  botonTierra.addEventListener('click', ataqueTierra);
  botonReiniciar.addEventListener('click', reiniciarJuego); 
};

window.addEventListener('load', iniciarJuego);
