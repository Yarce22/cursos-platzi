import Image from 'next/image'
import { getProducts } from 'app/services/shopify'
import type { Product } from 'app/types'
import styles from './MainProducts.module.sass'

export const MainProducts = async () => {
  const res = await fetch('http://localhost:3000/api/')
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