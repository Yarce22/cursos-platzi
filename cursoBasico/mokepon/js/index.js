const inputHipodoge = document.querySelector('#hipodoge');
const inputCapipepo = document.querySelector('#capipepo');
const inputRatigueya = document.querySelector('#ratigueya');
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
const imgMascotaJugador = document.querySelector('#img-mascota-jugador');
const imgMascotaEnemigo = document.querySelector('#img-mascota-enemigo');

const mokepones = [];

let ataqueJugador;
let ataqueEnemigo;

const urlImgHipodoge = './assets/mokepons_mokepon_hipodoge_attack.webp'
const urlImgCapipepo = './assets/mokepons_mokepon_capipepo_attack.webp'
const urlImgRatigueya = './assets/mokepons_mokepon_ratigueya_attack.webp'

class Mokepon {
  constructor (nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
};

let hipodoge = new Mokepon ('Hipodoge', urlImgHipodoge, 3);
hipodoge.ataques.push(
  {nombre: 'Pistola de agua 💧', id: 'boton-agua'},
  {nombre: 'Hidrobomba 💧', id: 'boton-agua'},
  {nombre: 'Burbujas 💧', id: 'boton-agua'},
  {nombre: 'Arañazos 🐾', id: 'boton-agua'},
)

let capipepo = new Mokepon ('Capipepo', urlImgCapipepo, 3);
capipepo.ataques.push(
  {nombre: 'Latigazo 🌿', id: 'boton-tierra'},
  {nombre: 'Esporas 🌿', id: 'boton-tierra'},
  {nombre: 'Bajo tierra 🌿', id: 'boton-tierra'},
  {nombre: 'Arañazos 🐾', id: 'boton-tierra'},
)

let ratigueya = new Mokepon ('Hipodoge', urlImgRatigueya, 3);
ratigueya.ataques.push(
  {nombre: 'Latigazo 🔥', id: 'boton-fuego'},
  {nombre: 'Lluvia de fuego 🔥', id: 'boton-fuego'},
  {nombre: 'Coletazo 🐾', id: 'boton-fuego'},
  {nombre: 'Arañazos 🐾', id: 'boton-fuego'},
)

mokepones.push(hipodoge, capipepo, ratigueya);

const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const imgMascota = (mascota, personaje) => {
  if (mascota == 'Hipodoge') {
    personaje.src = urlImgHipodoge;
  } else if (mascota == 'Capipepo') {
    personaje.src = urlImgCapipepo;
  } else if (mascota == 'Ratigueya') {
    personaje.src = urlImgRatigueya;
  }
  console.log(mascota, personaje);
}

const seleccionarMascotaEnemigo = () => {
  let mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria === 1) {
    alert('La mascota del enemigo es el Hipodoge');
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
    imgMascota(spanMascotaEnemigo.innerHTML, imgMascotaEnemigo);
  } else if (mascotaAleatoria === 2) {
    alert('La mascota del enemigo es el Capipepo');
    spanMascotaEnemigo.innerHTML = 'Capipepo';
    imgMascota(spanMascotaEnemigo.innerHTML, imgMascotaEnemigo);
  } else if (mascotaAleatoria === 3) {
    alert('La mascota del enemigo es el Ratigueya');
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
    imgMascota(spanMascotaEnemigo.innerHTML, imgMascotaEnemigo);
  }
}

const seleccionarMascota = () => {
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
    imgMascota(spanMascotaJugador.innerHTML, imgMascotaJugador);
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
    imgMascota(spanMascotaJugador.innerHTML, imgMascotaJugador);
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
    imgMascota(spanMascotaJugador.innerHTML, imgMascotaJugador);
  }

  seleccionarMascotaEnemigo();

  sectionSeleccionarMascota.style.display = 'none';
  sectionSeleccionarAtaque.style.display = 'flex';
  sectionVidas.style.display = 'grid';

};

const combate = () => {
  if (ataqueJugador === ataqueEnemigo) {
    return 'EMPATE 🙅‍♂️';
  } else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE 🎉';
  } else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE 🎉';
  } else if (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
    vidasEnemigo.innerHTML -= 1;
    return 'GANASTE 🎉';
  } else {
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
    ataqueEnemigo = 'FUEGO';
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = 'AGUA'
  } else {
    ataqueEnemigo = 'TIERRA'
  }
}

const ataqueFuego = () => {
  ataqueJugador = `FUEGO`;

  ataqueEnemigoAleatorio();
  crearMensaje();
}

const ataqueAgua = () => {
  ataqueJugador = `AGUA`;

  ataqueEnemigoAleatorio();
  crearMensaje();
}

const ataqueTierra = () => {
  ataqueJugador = `TIERRA`;

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
