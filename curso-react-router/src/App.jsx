import { HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { BlogPage } from './components/BlogPage'
import { BlogPost } from './components/BlogPost'
import { ProfilePage } from './components/ProfilePage'
import { Menu } from './components/Menu'
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
