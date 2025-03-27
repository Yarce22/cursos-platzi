import Image from 'next/image'
import { Product } from 'app/types/index'
import styles from './MainProducts.module.sass'

const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`, {
      headers: new Headers({
        "X-Shopify-Access-Token": process.env.SHOPIFY_APY_KEY || "",
      })
    })
    const data = await res.json()
    return data
} catch (error) {
    console.log(error)
  }
}

export const MainProducts = async () => {
  const { products } = await getProducts()

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
  )
}