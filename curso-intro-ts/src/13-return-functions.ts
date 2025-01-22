(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0
    prices.forEach(price => {
      total += price;
    })
    return total;
  }

  // Void quiere decir que esta función no retornara nada
  const printTotal = (price: number[]): void => {
    const rta = calcTotal(price)
    console.log(`El total es ${rta}`);
  }

  printTotal([1,2,1,2,1,2,1])
})()
