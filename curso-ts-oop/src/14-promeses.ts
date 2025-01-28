import axios from "axios"

(async () => {
  const delay = (time: number) => {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string')
      }, time)
    })
    return promise
  }

  const getProducts = () => {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products')
    return promise
  }
  const getProductsAxios = async () => {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    return res.data
  }

  console.log('-'.repeat(20));
  const rta = await delay(3000)
  console.log(rta)

  console.log('-'.repeat(20));
  const products = await getProducts()
  console.log(products.data)

  console.log('-'.repeat(20));
  const productsV2 = getProductsAxios()
  console.log(productsV2)

})()
