(() => {
  type Sizes = 's' | 'm' | 'l'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const defaultDate = new Date()

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Prod1',
    createdAt: new Date(),
    stock: 12,
  })
  addProduct({
    title: 'Prod2',
    createdAt: new Date(),
    stock: 12,
    size: 'm'
  })
})()
