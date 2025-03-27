import { Description } from "app/component/home/Description";
import { Hero } from "app/component/home/Hero";
import { MainProducts } from "app/component/home/MainProducts";
import { Loader } from "app/component/shared/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Suspense fallback={<Loader />}>
        <MainProducts />
      </Suspense>
    </main>
  )
}