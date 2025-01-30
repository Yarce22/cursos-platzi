import { ProductMemoryService } from "./services/product.service";

const productService = new ProductMemoryService()

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Lorem Epson',
  categoryId: '12',
  image: []
})

const products = productService.getProducts()
console.log(products)

const productId = products[0].id

productService.updateProduct(productId, {
  title: 'New Name'
})
