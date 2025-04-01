import { ProductView } from "app/component/product/ProductView/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";


interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage(props: ProductPageProps) {
  const id = props.searchParams.id
  
  const products = await getProducts(id)
  const product = products[0]

  if (!id) {
    redirect('/store')
  }
  
  return (
    <ProductView product={product} />
  )
}