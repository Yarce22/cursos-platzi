import { Description } from "app/component/home/Description";
import { Hero } from "app/component/home/Hero";
import { MainProducts } from "app/component/home/MainProducts";
import { Loader } from "app/component/shared/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to the future e-commerce",
  keywords: "e-commerce, shopping, online store, ecommerce, store, online shopping, online shop, e-commerce store, ecommerce store, shopping store",
}

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