import { RandomFox } from "@/components/RandomFox";
const random = (): number => Math.floor(Math.random()*123)+1

export default function Home() {
  const srcImage = `https://randomfox.ca/images/${random()}.jpg`

  return (
    <div>
      <main>
        <RandomFox
          src={srcImage}
        />
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
