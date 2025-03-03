import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Product } from './components/Products'
import { Home } from './components/Home'
import { About } from './components/About'
import { Dashboard } from './components/Dashboard'
import { Overview } from './components/Overview'
import { Settings } from './components/Settings'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Profile } from './components/Profile'
import { NotFound } from './components/NotFound'
import './App.css'

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={<Overview />}></Route>
          <Route path="settings" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Settings />
            </Suspense>
          }></Route>
        </Route>
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={false}>
            <Profile />
          </ProtectedRoute>
        }></Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </div>
  )
}

export default App
