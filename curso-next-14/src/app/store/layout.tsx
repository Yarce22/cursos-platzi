import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

interface CollectionProps {
  id: number,
  title: string,
  handle: string
}

export default async function Layout ({ children }: { children: React.ReactNode } ) {
  const collections = await getCollections()
  console.log("collections desde el layout", collections)

  return (
    <main>
      <nav>
        {
          collections?.map((collection: CollectionProps) => (
            <Link
              key={collection.id}
              href={collection.handle}
            >
              {collection.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </main>
  )
}