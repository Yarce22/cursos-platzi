import Image from "next/image"
import styles from "./MainProducts.module.css"

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Array<{
    product_id: number;
    id: number;
    title: string;
    price: string;
    position: number
    inventory_policy: string;
    compare_at_price: string;
    option1: string;
    option2: null | string;
    option3: null | string;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: string;
    fulfillment_service: string;
    grams: number;
    inventory_management: null | string;
    requires_shipping: boolean;
    sku: string | null;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    admin_graphql_api_id: string;
    image_id: number | null;
   }>;
  options: Array<{
    product_id: number;
    id: number;
    name: string;
    position: number;
    values: string[];
  }>; 
  images: Array<{
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  }>;
  image: {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}

const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
      })
    })
    const data = await res.json()
    return data.products
  } catch (error) {
    console.error(error)
  }
}

const MainProducts = async () => {
  const products = await getProducts()
  
  return ( 
    <section className={styles.MainProducts}>
      <h3>New products released!</h3>
      <div className={styles.MainProducts__grid}>

        {products?.map((product: Product) => {
          console.log('product', product);
          
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} alt={product.title} loading="eager" fill />
            </article>
          ) 
        })}
      </div>
    </section>
  )
}

export default MainProducts