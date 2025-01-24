import { Product } from "./product.model"

export const products: Product[] = []

export const addProducts = (data: Product) => {
  products.push(data)
}

