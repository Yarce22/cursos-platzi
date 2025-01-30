import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "./product.module";

export interface ProductService {
  getProducts(): Product[] | Promise<Product[]>,
  create(dto: CreateProductDto): Product | Promise<Product>,
  updateProduct(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>
}
