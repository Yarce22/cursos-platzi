import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductWrapper.module.css'

interface ProductsWrapperProps {
    products: ProductType[]
}

const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className={styles.ProductsWrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductsWrapper