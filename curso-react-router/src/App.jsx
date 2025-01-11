import { HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { BlogPage } from './components/BlogPage'
import { BlogPost } from './components/BlogPost'
import { ProfilePage } from './components/ProfilePage'
import { Menu } from './components/Menu'
import { LoginPage } from './components/loginPage'
import { LogoutPage } from './components/LogoutPage'
import { AuthProvider } from './Context'
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
