import { addProduct, calcStock, products } from './product.service'

addProduct({
  title: 'Prod1',
  createdAt: new Date(),
  stock: 12,
})
addProduct({
  title: 'Prod2',
  createdAt: new Date(),
  stock: 12,
  size: 'm'
})

console.log('products', products)
const total = calcStock()
console.log('total', total)
