import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../hooks"

const LogoutPage = () => {
  const {auth} = useAuthContext()

  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }

  if (!auth.user) {	
      return <Navigate to="/login" />;
    }

  return (
    <div>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Seguro deseas salir?</label>
        <button type="submit">Logout</button>
      </form>
    </div>
  )
}

export { LogoutPage }
