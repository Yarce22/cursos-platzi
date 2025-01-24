export const createProduct = (
  id: string | number,
  // stock?: number, //los parametros opcionales tienen que estar al final
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10, //nullish coalescing
    isNew: isNew ?? true
  }
}

const product1 = createProduct(1, true, 12)

console.log(product1);

