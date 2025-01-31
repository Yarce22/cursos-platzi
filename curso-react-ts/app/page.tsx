// const srcImage = `https://randomfox.ca/images/${random()}.jpg`
'use client'
import { RandomFox } from "@/components/RandomFox";
import { useEffect, useState } from "react";

type ImageItem = { id: string, src: string }[]

const random = (): number => Math.floor(Math.random()*123)+1
const generateId = () => Math.random().toString(36).substring(2,9)

export default function Home() {
  const [images, setImages] = useState<ImageItem>([])


  useEffect(() => {
    const images: ImageItem = [];
    for (let i = 0; i < 4; i++) {
      const id = generateId();
      const src = `https://randomfox.ca/images/${random()}.jpg`;
      images.push({ id, src });
    }
    setImages(images);
 
}, []);

  return (
    <div>
      <main>
        {images.map((image) => (
          <div key={image.id} className="p-4">
            <RandomFox src={image.src} />
          </div>
        ))}
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
