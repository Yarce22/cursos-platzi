export class Animal {
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
      console.log('woof');

    }
  }
}
