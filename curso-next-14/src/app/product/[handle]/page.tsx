import { ProductView } from "app/component/product/ProductView/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";
import { title } from "process";


interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products[0]

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.title,
        },
      ],
    },
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