import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../utils/blogdata";
import PropTypes from "prop-types";

const userList = [
  {username: 'alejo', rol: 'admin'},
  {username: 'admin', rol: 'admin'},
  {username: 'editor', rol: 'editor'},
]

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState(blogData)


  const login = ({ username }) => {
    const rol = userList.find(user => user.username === username)?.rol || 'reader'
    setUser({ username, rol })
    navigate('/blog')
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = {
    user,
    blogs,
    setBlogs,
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
