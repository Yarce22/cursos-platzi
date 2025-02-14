import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const collections = await getCollections()

  return (
    <main>
      <nav>{collections.map((collection) => (
        <Link key={collection.id} href={`/store/${collection.handle}`}>
          {collection.title}
        </Link>
      ))}</nav>
      { children }
    </main>
  )
}

export default Layout