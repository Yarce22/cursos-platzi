import { addProducts } from "./products/product.service";

addProducts({
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'p1',
  stock: 90,
  size: 'M',
  category: {
    id: '1',
    name: 'category1'
  }
})
