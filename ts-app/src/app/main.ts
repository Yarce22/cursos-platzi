import { faker } from '@faker-js/faker'
import { addProducts, products, updateProduct } from "./products/product.service";

for (let i = 0; i < 5; i++) {
  addProducts({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }),
    stock: faker.number.int({ min: 10 }),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(() => faker.commerce.productAdjective()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.string.uuid(),
  })
}
const product = products[0]
updateProduct(product.id, {
  title: 'New title',
  stock: 80
})
