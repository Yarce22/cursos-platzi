(() => {
  type ID = string | number;
  let userID: ID;

  function greeting(myText: ID) {
    typeof myText === 'string'
      ? console.log(`Hello ${myText}`)
      : console.log(`Hello ${myText.toString()}`)
  }
  greeting('Hello World')
  greeting(123456)

  // literal types
  type Sizes = 's' | 'm' | 'l';
  let shirtSize: Sizes;
  shirtSize = 's';
  shirtSize = 'm';
  shirtSize = 'l';
  // shirtSize = 'xl'; // Error
  // shirtSize = 'S'; // Error
})()
