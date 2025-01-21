(() => {
  let userID: string | number
  userID = 123456
  userID = 'Hello World'

  function greeting(myText: string | number) {
    typeof myText === 'string'
      ? console.log(`Hello ${myText}`)
      : console.log(`Hello ${myText.toString()}`)
  }
  greeting('Hello World')
  greeting(123456)
})()
