import { faker } from '@faker-js/faker'
import { Product } from "../models/product.module"
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto"

export class ProductMemoryService {
  private products: Product[] = []

  getProducts () {
    return this.products
  }

  create(data: CreateProductDto): Product {
    const nreProduct = {
      ...data,
      id: Number(faker.string.uuid()),
      category: {
        id: Number(faker.string.uuid()),
        name: faker.commerce.department(),
        image: faker.image.url()
      }
    }
    return this.add(nreProduct)
  }

  add(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: Number(faker.string.uuid()),
      category: {
        id: Number(faker.string.uuid()),
        name: faker.commerce.department(),
        image: faker.image.url()
      }
    }
    this.products.push(newProduct)
    return newProduct
  }

  updateProduct (id: string | number, changes: UpdateProductDto): Product {
    const productIndex = this.products.findIndex(product => product.id === id)
    const prevData = this.products[productIndex]
    this.products[productIndex] = {
      ...prevData,
      ...changes
    }
    return this.products[productIndex]
  }

}
