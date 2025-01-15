import { useState } from "react"
import { useAuthContext } from "../../hooks"
import { Navigate, useLocation } from "react-router-dom"

const LoginPage = () => {
  const location = useLocation()
  const {auth} = useAuthContext()
  const [username, setUsername] = useState('') 
  console.log(location)
  
  const login = (e) => {
    e.preventDefault()
    auth.login({ username })
  }

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={login}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
        />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export { LoginPage }
