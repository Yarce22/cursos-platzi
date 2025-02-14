import { getProducts } from 'app/services/shopify/products'
import ProductWrapped from '../../../components/Store/ProductWrapper/ProductWrapper'

interface CategoryProps {
  params: { 
    categories: string[],
    searchParams?: string
  }
}

const Category = async (props: CategoryProps): Promise<React.JSX.Element> => {
  const products = await getProducts()
  const { categories } = props.params
  return (
    <ProductWrapped products={products} />
  )
}

export default Category