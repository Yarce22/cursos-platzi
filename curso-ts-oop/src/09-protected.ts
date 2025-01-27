export abstract class Animal {
  constructor(
    protected name: string
  ) {}

  move() {
    console.log('moving');
  }

  greeting() {
    console.log('Hola');
  }
}

export class Dog extends Animal {
  constructor(
    public name: string,
    public owner: string
  ) {
    super(name)
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`woof ${this.name}`); // Puedo acceder a las propiedades heredadas
    }
  }
}

const fifi = new Dog('fifi', 'fifi')
// fifi.name('otro nombre') // no puedo modificar las propiedades protegidas
console.log(fifi.woof(1));

