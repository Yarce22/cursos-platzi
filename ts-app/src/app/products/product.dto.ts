import { Product } from "./product.model";

 export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string
}

export interface UpdateProductDto extends Partial<Product> {}

export interface FindProductDto extends Readonly<Partial<Product>> {}
