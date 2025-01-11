import { useState } from "react"
import { useAuthContext } from "../../hooks"
import { Navigate } from "react-router-dom"

const LoginPage = () => {
  const {auth} = useAuthContext()
  const [username, setUsername] = useState('') 
  
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
