import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './pages/Hero'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import { Profile } from './dashboard/profile'
import { ProtectedRoute } from './middleware/protectedRoutes'


const App = () => {
  return (
    <main className='max-w-screen min-h-screen'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Routes>
        // Public routes
        <Route path='/' element={<Hero />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />

        // Private routes
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Profile />} />
          <Route />
        </Route>
      </Routes>
      <Footer />
    </main>
  )
}

export default App

