type Sizes = 'S' | 'M' | 'L' | 'XL'

// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: Date,
//   stock: number,
//   size: Sizes
// }

// La ventaja de las interface es que estas se pueden extender, los type no.
interface Product {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes
}

const products: Product[] = []

products.push({
  id:'1',
  title:'p1',
  createdAt: new Date(),
  stock: 10,
  size: 'M'
})

const addProducts = (data: Product) => {
  products.push(data)
}
