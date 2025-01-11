import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const adminList = ['admin1', 'admin2', 'alejo']

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  const login = ({ username }) => {
    const isAdmin = adminList.includes(username)
    setUser({ username, isAdmin })
    navigate('/blog')
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = {
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={{auth}}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AuthContext, AuthProvider }
