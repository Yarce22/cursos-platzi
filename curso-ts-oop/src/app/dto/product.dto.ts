import { Product } from "../models/product.module";

 export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: string
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
