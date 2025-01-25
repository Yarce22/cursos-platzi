import { faker } from '@faker-js/faker'
import { Product } from "./product.model"
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto"

export const products: Product[] = []

export const addProducts = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id: string | number, changes: UpdateProductDto): Product => {
  const productIndex = products.findIndex(product => product.id === id)
  const prevData = products[productIndex]
  products[productIndex] = {
    ...prevData,
    ...changes
  }
  return products[productIndex]
}


export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.tags?.pop()
  // dto.tags?.push()
  return products
}
