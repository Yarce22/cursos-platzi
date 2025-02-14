import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export const getProducts = async () => {
  try {
    const res = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      })
    })
    const data = await res.json()
    return data.products
  } catch (error) {
    console.error(error)
  }
}