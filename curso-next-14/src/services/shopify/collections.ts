import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import { log } from "console"

export const getCollections = async () => {
  try {
    const res = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      })
    })
    const { smart_collections } = await res.json()
    const transformedCollections = smart_collections.map((collection: ShopifyCollection) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      }
    })
    return transformedCollections
} catch (error) {
    console.log(error)
  }
}

export const getCollectionProducts = async (id: string) => {
  try{
    const res = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      })
    })
    const { products } = await res.json()
    return products
  } catch (error) {
    console.log(error)
  }
}