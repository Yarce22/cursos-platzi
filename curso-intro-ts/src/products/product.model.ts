export type Sizes = 's' | 'm' | 'l'
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
