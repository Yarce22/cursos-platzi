'use client'
import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";
const random = (): number => Math.floor(Math.random()*123)+1

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ])

  // const srcImage = `https://randomfox.ca/images/${random()}.jpg`

  return (
    <div>
      <main>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox src={image} />
          </div>
        ))}
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
