import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export const getProducts = async () => {
  try {
    const res = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      })
    })
    const {  products } = await res.json()
    return products
} catch (error) {
    console.log(error)
  }
}