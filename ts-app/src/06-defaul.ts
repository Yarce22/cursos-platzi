export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew
  }
}

const product1 = createProduct(1, true, 12)
const product2 = createProduct(1)

console.log(product1);
console.log(product2);

