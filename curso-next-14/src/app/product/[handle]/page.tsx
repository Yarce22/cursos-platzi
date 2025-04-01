import { ProductView } from "app/component/product/ProductView/ProductView";
import { getProducts } from "app/services/shopify/products";


interface ProductPageProps {
  params: {
    searchParams: {
      id: string
    }
  }
}

export default async function ProductPage(props: ProductPageProps) {
  const id = props.params.searchParams.id
  const products = await getProducts(id)
  const product = products[0]
  
  return (
    <ProductView product={product} />
  )
}