// const srcImage = `https://randomfox.ca/images/${random()}.jpg`
'use client'
import { LazyImage } from "@/components/LazyImage";
import Head from "next/head";
import { useEffect, useState } from "react";
import type { MouseEventHandler } from "react";

type ImageItem = { id: string, src: string }

const random = (): number => Math.floor(Math.random()*123)+1
const generateId = () => Math.random().toString(36).substring(2,9)

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([])

  useEffect(() => {
    const images: ImageItem[] = [];
      const id = generateId();
      const src = `https://randomfox.ca/images/${random()}.jpg`;
      images.push({ id, src });
    setImages(images);
 
  }, []);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const newImageItem = {
      id: generateId(),
      src: `https://randomfox.ca/images/${random()}.jpg`
    }

    setImages([
      ...images,
      newImageItem
    ])
    window.plausible("add_fox")
  }

  return (
    <div>
      <Head>
      <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <main>
        <h1>Hello Platzi</h1>
        <button onClick={addNewFox}>add fox</button>
        {images.map((image, index) => (
          <div key={image.id} className="p-4">
            <LazyImage 
              src={image.src}
              width={320}
              height={320}
              title="Random Fox"
              className="rounded bg-gray-300"
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
