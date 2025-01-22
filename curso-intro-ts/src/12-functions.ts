(() => {
  type Sizes = 's' | 'm' | 'l';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //Esta variable es opcional por el optional chaining
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    }
  }

  const product1 = createProductToJson('Shirt', new Date(), 100, 'm');
  console.log(product1);
  const product2 = createProductToJson('Shirt', new Date(), 100); //Si no se le pasa el tamaño, se le asigna undefined
  console.log(product2);
})()
