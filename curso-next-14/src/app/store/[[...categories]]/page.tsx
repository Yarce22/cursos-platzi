import { ProductsWrapper } from "app/component/Store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
  params: {
    categories: string,
    searchParams?: string
  }
}

interface Collection {
  id: number,
  title: string,
  handle: string
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params
  
  let products = []
  const collections = await getCollections()
  
  if (categories?.length > 0) {
    const selectedCollectionId = collections.find((collection: Collection) => collection.handle === categories[0])?.id
    products = await getCollectionProducts(selectedCollectionId)
  } else {
    products = await getProducts()
  }
  
  return (
    <ProductsWrapper products={products} />
  )
}