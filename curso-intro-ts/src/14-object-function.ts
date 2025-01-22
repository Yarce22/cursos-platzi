(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password)
  }

  // login('nico@', 'asdasdf')
  login({
    email: 'nico',
    password: 'adfasdca'
  })
})()
