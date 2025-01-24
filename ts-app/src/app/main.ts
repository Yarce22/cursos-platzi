import { addProducts } from "./products/product.service";

addProducts({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
  size: 'M',
  category: {
    id: '1',
    name: 'category1'
  }
})
