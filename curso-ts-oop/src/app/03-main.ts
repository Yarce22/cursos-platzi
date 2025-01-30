import { productHttpService } from "./services/product-http.service";

(async () => {
  const productService = new productHttpService();

  console.log('-'.repeat(10));
  const products = await productService.getProducts()
  console.log(products.length);

})()

