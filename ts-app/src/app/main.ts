import { faker } from '@faker-js/faker'
import { addProducts, products } from "./products/product.service";

for (let i = 0; i < 5; i++) {
  addProducts({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 10 }),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(() => faker.commerce.productAdjective()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  })
}

addProducts({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.url(),
  color: faker.color.human(),
  price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  stock: faker.number.int({ min: 10, max: 25 }),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.multiple(() => faker.commerce.productAdjective()),
  size: 'M',
  category: {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  }
})

console.log(products);

