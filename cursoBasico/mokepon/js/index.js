
const spanMascotaJugador = document.querySelector('#mascota-jugador');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');
const mensajes = document.querySelector('#resultado');
const divAtaqueJugador = document.querySelector('#ataque-del-jugador');
const divAtaqueEnemigo = document.querySelector('#ataque-del-enemigo');
const vidasJugador = document.querySelector('#vidas-jugador');
const vidasEnemigo = document.querySelector('#vidas-enemigo');
const botonReiniciar = document.querySelector('#boton-reiniciar');
const sectionSeleccionarAtaque = document.querySelector('#seleccionar-ataque');
const sectionReiniciar = document.querySelector('#reiniciar');
const sectionSeleccionarMascota = document.querySelector('.seleccionar-mascota');
const sectionVidas = document.querySelector('#section-vidas');
const divBotonesAtaque = document.querySelector('#botones-ataque');
const subtitulo = document.querySelector('#subtitulo-ataque');
const imgMascotaJugador = document.querySelector('#img-mascota-jugador');
const imgMascotaEnemigo = document.querySelector('#img-mascota-enemigo');
const contenedorTarjetas = document.querySelector('#contenedor-tarjetas');
const sectionVerMapa = document.querySelector('#ver-mapa');
const mapa = document.querySelector('#mapa');

const mokepones = [];

let ataqueJugador;
let ataqueEnemigo;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo; 
let inputRatigueya;
let mascotaJugador;
let lienzo = mapa.getContext('2d');
let intervalo;

const urlImgHipodoge = './assets/mokepons_mokepon_hipodoge_attack.webp'
const urlImgCapipepo = './assets/mokepons_mokepon_capipepo_attack.webp'
const urlImgRatigueya = './assets/mokepons_mokepon_ratigueya_attack.webp'

class Mokepon {
  constructor (nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x = 20;
    this.y = 30;
    this.ancho = 80;
    this.alto = 80;
    this.mapaFoto = new Image();
    this.mapaFoto.src = foto;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
};

let hipodoge = new Mokepon ('Hipodoge', urlImgHipodoge, 3);
hipodoge.ataques.push(
  {nombre: 'Pistola de agua 💧', id: 'boton-agua', tipo: 'agua'},
  {nombre: 'Hidrobomba 💧', id: 'boton-agua', tipo: 'agua'},
  {nombre: 'lluvia ácida 🔥', id: 'boton-fuego', tipo: 'fuego'},
  {nombre: 'Golpe al suelo 🌿', id: 'boton-tierra', tipo: 'tierra'},
)

let capipepo = new Mokepon ('Capipepo', urlImgCapipepo, 3);
capipepo.ataques.push(
  {nombre: 'Latigazo 🌿', id: 'boton-tierra', tipo: 'tierra'},
  {nombre: 'Esporas 🌿', id: 'boton-tierra', tipo: 'tierra'},
  {nombre: 'Patadas ardientes 🔥', id: 'boton-fuego', tipo: 'fuego'},
  {nombre: 'Puños de agua 💧', id: 'boton-agua', tipo: 'agua'},
)

let ratigueya = new Mokepon ('Ratigueya', urlImgRatigueya, 3);
ratigueya.ataques.push(
  {nombre: 'Bomba de humo 🔥', id: 'boton-fuego'},
  {nombre: 'Lluvia de fuego 🔥', id: 'boton-fuego'},
  {nombre: 'Cola de acero 🌿', id: 'boton-tierra'},
  {nombre: 'Arañazos 💧', id: 'boton-agua'},
)

mokepones.push(hipodoge, capipepo, ratigueya);

const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const imgMascota = () => {
  mascotaJugador.x += mascotaJugador.velocidadX;
  mascotaJugador.y += mascotaJugador.velocidadY;
  lienzo.clearRect(0, 0, mapa.clientWidth, mapa.height);
  lienzo.drawImage(
    mascotaJugador.mapaFoto,
    mascotaJugador.x,
    mascotaJugador.y,
    mascotaJugador.ancho,
    mascotaJugador.alto,
  );

  
}

const seleccionarMascotaEnemigo = () => {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
}

const seleccionarMascota = () => {
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
    mascotaJugador = hipodoge;
    imgMascota();
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
    mascotaJugador = capipepo;
    imgMascota();
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
    mascotaJugador = ratigueya;
    imgMascota();
  }

  seleccionarMascotaEnemigo();
  mostrarAtaques(spanMascotaJugador.innerHTML);

  sectionSeleccionarMascota.style.display = 'none';
  sectionVerMapa.style.display = 'flex'
  sectionVidas.style.display = 'none';

  intervalo = setInterval(imgMascota, 50)
};

const mostrarAtaques = (mascota) => {
  let ataquesMokepon;
  const nombreMokepon = mokepones.find((mokepon) => mokepon.nombre === mascota);
  
  nombreMokepon.ataques.map((ataque) => {
   ataquesMokepon = `
      <button id='${ataque.id}' class="boton-ataque">${ataque.nombre}</button>
    `;

    divBotonesAtaque.innerHTML += ataquesMokepon;
  })

  const btnAtaqueFuego = document.querySelectorAll('#boton-fuego');
  const btnAtaqueAgua = document.querySelectorAll('#boton-agua');
  const btnAtaqueTierra = document.querySelectorAll('#boton-tierra');

  btnAtaqueFuego.forEach(btn => {
    btn.addEventListener('click', ataqueFuego);
  })
  btnAtaqueAgua.forEach(btn => {
    btn.addEventListener('click', ataqueAgua);
  })
  btnAtaqueTierra.forEach(btn => {
    btn.addEventListener('click', ataqueTierra);
  })
}

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
  sectionVerMapa.style.display = 'none';

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre.toLocaleLowerCase()}>
    <label for=${mokepon.nombre.toLocaleLowerCase()} id="tarjetaMokepon-${mokepon.nombre.toLocaleLowerCase()}" class="tarjetaMokepon">
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones;
  })
  
  inputHipodoge = document.querySelector('#hipodoge');
  inputCapipepo = document.querySelector('#capipepo');
  inputRatigueya = document.querySelector('#ratigueya');
  
  let botonMascota = document.querySelector('#boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascota);

  botonReiniciar.addEventListener('click', reiniciarJuego); 
};

const moverArriba = () => {
  mascotaJugador.velocidadY = -5
}
const moverIzquierda = () => {
  mascotaJugador.velocidadX = -5
}
const moverAbajo = () => {
  mascotaJugador.velocidadY = 5
}
const moverDerecha = () => {
  mascotaJugador.velocidadX = 5
}

const detenerMovimiento = () => {
  mascotaJugador.velocidadX = 0
  mascotaJugador.velocidadY = 0
}

window.addEventListener('load', iniciarJuego);
