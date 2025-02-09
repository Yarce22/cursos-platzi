import Description from "./store/components/home/Description";
import Hero from "./store/components/home/Hero";
import MainProducts from "./store/components/home/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
