import { Animal, Dog } from "./08-inheritance";

const animal = new Animal('elite')
animal.greeting()

const fifi = new Dog('fifi', 'fifi')
fifi.woof

abstract class Planta {
  constructor(
    public name: string
  ) {}
}


class Arbusto extends Planta {

}
