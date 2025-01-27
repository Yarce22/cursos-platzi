// El paradigma singleton nos dice que debemos de
export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('debería de entrar una vez');

      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const myService = MyService.create('Servicio 1')
console.log(myService);
