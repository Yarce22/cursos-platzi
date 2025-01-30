import axios from "axios";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { ProductService } from "../models/product-service.module";
import { Product } from "../models/product.module";

export class productHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products'

  async getProducts() {
    const { data } = await axios.get<Product[]>(this.url)
    return data
  }
  async updateProduct(id: Product["id"], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto)
    return data
  }
}
