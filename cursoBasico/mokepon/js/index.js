
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
let mascotaEnemigo;
let lienzo = mapa.getContext('2d');
let intervalo;
let mapaBg = new Image();
mapaBg.src = './assets/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.webp';
let alturaDelMapa;
let anchoDelMapa = window.innerWidth - 20

alturaDelMapa = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaDelMapa;

const urlImgHipodoge = './assets/mokepons_mokepon_hipodoge_attack.webp';
const urlImgCapipepo = './assets/mokepons_mokepon_capipepo_attack.webp';
const urlImgRatigueya = './assets/mokepons_mokepon_ratigueya_attack.webp';
const urlImgHipodogeHead = './assets/hipodoge.png';
const urlImgCapipepoHead = './assets/capipepo-88af5708-65fd-4c17-b6ba-b8769612c301.webp';
const urlImgRatigueyaHead = './assets/ratigueya-3d52f361-7036-4ff7-bf61-c4b7e49875ff.webp';

class Mokepon {
  constructor (nombre, foto, vida, fotoMapa, x = 340, y = 120) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 40;
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMokepon() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto,
    );
  }
};

let hipodoge = new Mokepon ('Hipodoge', urlImgHipodoge, 3, urlImgHipodogeHead);
hipodoge.ataques.push(
  {nombre: 'Pistola de agua 💧', id: 'boton-agua', tipo: 'agua'},
  {nombre: 'Hidrobomba 💧', id: 'boton-agua', tipo: 'agua'},
  {nombre: 'lluvia ácida 🔥', id: 'boton-fuego', tipo: 'fuego'},
  {nombre: 'Golpe al suelo 🌿', id: 'boton-tierra', tipo: 'tierra'},
)

let capipepo = new Mokepon ('Capipepo', urlImgCapipepo, 3, urlImgCapipepoHead);
capipepo.ataques.push(
  {nombre: 'Latigazo 🌿', id: 'boton-tierra', tipo: 'tierra'},
  {nombre: 'Esporas 🌿', id: 'boton-tierra', tipo: 'tierra'},
  {nombre: 'Patadas ardientes 🔥', id: 'boton-fuego', tipo: 'fuego'},
  {nombre: 'Puños de agua 💧', id: 'boton-agua', tipo: 'agua'},
)

let ratigueya = new Mokepon ('Ratigueya', urlImgRatigueya, 3, urlImgRatigueyaHead);
ratigueya.ataques.push(
  {nombre: 'Bomba de humo 🔥', id: 'boton-fuego'},
  {nombre: 'Lluvia de fuego 🔥', id: 'boton-fuego'},
  {nombre: 'Cola de acero 🌿', id: 'boton-tierra'},
  {nombre: 'Arañazos 💧', id: 'boton-agua'},
)

let hipodogeEnemigo = new Mokepon ('Hipodoge Salvaje', urlImgHipodoge, 3, urlImgHipodogeHead, 80, 200);
hipodogeEnemigo.ataques.push(
  {nombre: 'Pistola de agua 💧', id: 'boton-agua', tipo: 'agua'},
  {nombre: 'Hidrobomba 💧', id: 'boton-agua', tipo: 'agua'},
  {nombre: 'lluvia ácida 🔥', id: 'boton-fuego', tipo: 'fuego'},
  {nombre: 'Golpe al suelo 🌿', id: 'boton-tierra', tipo: 'tierra'},
)

let capipepoEnemigo = new Mokepon ('Capipepo Salvaje', urlImgCapipepo, 3, urlImgCapipepoHead, 100, 85);
capipepoEnemigo.ataques.push(
  {nombre: 'Latigazo 🌿', id: 'boton-tierra', tipo: 'tierra'},
  {nombre: 'Esporas 🌿', id: 'boton-tierra', tipo: 'tierra'},
  {nombre: 'Patadas ardientes 🔥', id: 'boton-fuego', tipo: 'fuego'},
  {nombre: 'Puños de agua 💧', id: 'boton-agua', tipo: 'agua'},
)

let ratigueyaEnemigo = new Mokepon ('Ratigueya Salvaje', urlImgRatigueya, 3, urlImgRatigueyaHead, 400, 250);
ratigueyaEnemigo.ataques.push(
  {nombre: 'Bomba de humo 🔥', id: 'boton-fuego'},
  {nombre: 'Lluvia de fuego 🔥', id: 'boton-fuego'},
  {nombre: 'Cola de acero 🌿', id: 'boton-tierra'},
  {nombre: 'Arañazos 💧', id: 'boton-agua'},
)

mokepones.push(hipodoge, capipepo, ratigueya);

const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const pintarCanvas = () => {
  mascotaJugador.x += mascotaJugador.velocidadX;
  mascotaJugador.y += mascotaJugador.velocidadY;
  lienzo.clearRect(0, 0, mapa.clientWidth, mapa.height);
  lienzo.drawImage(
    mapaBg,
    0,
    0,
    mapa.width,
    mapa.height,
  )

  mascotaJugador.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();

  if (mascotaJugador.velocidadX !== 0 || mascotaJugador.velocidadY !== 0) {
    revisarColision(hipodogeEnemigo);
    revisarColision(capipepoEnemigo);
    revisarColision(ratigueyaEnemigo);
  }
}

const seleccionarMascotaEnemigo = (enemigo) => {
  mascotaEnemigo = enemigo;
  spanMascotaEnemigo.innerHTML = enemigo.nombre;
  imgMascotaEnemigo.src = enemigo.foto;
  imgMascotaJugador.src = mascotaJugador.foto;
}

const seleccionarMascota = () => {
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
    mascotaJugador = hipodoge;
    pintarCanvas();
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
    mascotaJugador = capipepo;
    pintarCanvas();
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
    mascotaJugador = ratigueya;
    pintarCanvas();
  }

  mostrarAtaques(spanMascotaJugador.innerHTML);

  sectionSeleccionarMascota.style.display = 'none';
  sectionVerMapa.style.display = 'flex'
  sectionVidas.style.display = 'none';

  intervalo = setInterval(pintarCanvas, 50)
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
    mensajes.innerText = `EL GANADOR ES EL ${spanMascotaEnemigo.innerHTML.toUpperCase()}!`;
    pararJuego();
  } else if (vidasEnemigo.innerHTML == 0) {
    mensajes.innerText = `EL GANADOR ES ${spanMascotaJugador.innerHTML.toUpperCase()}!`;
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

  mapa.width = 500;
  mapa.height = 350;

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

  window.addEventListener('keydown', moverMokepon);
  window.addEventListener('keyup', detenerMovimiento)
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

const moverMokepon = (e) => {
  switch (e.key) {
    case 'w':
    case 'W':
    case 'ArrowUp':
      moverArriba();      
      break;
    case 'a':
    case 'A':
    case 'ArrowLeft':
      moverIzquierda();      
      break;
    case 's':
    case 'S':
    case 'ArrowDown':
      moverAbajo();      
      break;
    case 'd':
    case 'D':
    case 'ArrowRight':
      moverDerecha();      
      break;
    default:
      break;
  }
}

const revisarColision = (enemigo) => {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugador.y;
  const abajoMascota = mascotaJugador.y + mascotaJugador.alto;
  const derechaMascota = mascotaJugador.x + mascotaJugador.ancho;
  const izquierdaMascota = mascotaJugador.x; 

  if(
      abajoMascota < arribaEnemigo ||
      arribaMascota > abajoEnemigo ||
      derechaMascota < izquierdaEnemigo || 
      izquierdaMascota > derechaEnemigo
  ) {
    return;
  }

  detenerMovimiento();
  sectionVerMapa.style.display = 'none'
  sectionSeleccionarAtaque.style.display = 'flex';
  sectionVidas.style.display = 'grid';
  seleccionarMascotaEnemigo(enemigo);
}

window.addEventListener('load', iniciarJuego);
