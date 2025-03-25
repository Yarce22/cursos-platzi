import { Description } from "app/component/home/Description";
import { Hero } from "app/component/home/Hero";
import { MainProducts } from "app/component/home/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  )
}