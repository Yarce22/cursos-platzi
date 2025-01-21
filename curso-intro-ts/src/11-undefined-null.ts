(() => {
  // let myNumber: number = undefined
  // let myString: string = null
  let myUndefined = undefined // Esto, por el tipado inferido, seria any
  let mNull = null // Esto, por el tipado inferido, seria any

  let myNumber: number | undefined = undefined
  myNumber = 10

  let myString: string | null = null
  myString = 'Hello'

  const hi = (name: string | null) => {
    let hello: string = 'hello'
    if (name) {
      hello += ` ${name}`
    } else {
      hello += ' world'
    }
    console.log(hello);
  }

  hi('Andres')
  hi(null)
})()
