(() => {
  let isEnable = true
  // isEnable = 'as'
  // isEnable = 1212
  isEnable = false
  let isNew: boolean = true
  console.log('isNew',isNew);
  isNew = false
  console.log('isNew',isNew);

  const random = Math.random()
  console.log('random', random);

  // isNew = random > 0.5 ? 'true' : 'false'
  isNew = random > 0.5 ? true : false
  console.log('isNew',isNew);
})()

