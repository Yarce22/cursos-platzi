// Las interfaces en las clases funcionan como un contrato. Donde le decimos a las clases la estructura del constructor que debe tener
// Esto lo podemos hacer tanto con propiedades como con los métodos
interface Driver {
  database: string,
  password: string,
  port: number,

  connect(): void,
  isConnected(name: string): boolean
}

class PostgresDiver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number //Desde que se cumplan las carteristas del contrato podemos agregar todo lo que queramos
  ) {}

  connect(): void {
    console.log('connected successful');
  }

  isConnected(name: string): boolean {
      return true
  }
}

