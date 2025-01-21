(() => {
  let prices = [100, 200, 300]
  // prices.push('asd')
  // prices.push(true)
  // prices.push({})
  prices.push(400)
  console.log('prices', prices);

  const products: (string | boolean)[] = ['table', true]
  // products.push(123)

  const mixed: (string | boolean| number)[] = ['wea', false]
  mixed.push('asd')
  mixed.push(123)
  mixed.push(true)
  // mixed.push({})
  // mixed.push([])
  console.log('mixed', mixed);

  let string2 = ['a', 'b', 'c']
  // string2.map((item) => (item * 2))
})()
