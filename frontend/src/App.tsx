import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './pages/Hero'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import { Profile } from './dashboard/profile'


const App: React.FC = () => {
  return (
    <main className='max-w-screen min-h-screen bg-zinc-900'>
      <Navbar />
      <Routes>
        // Public routes
        <Route path='/' element={<Hero />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />

        // Private routes
        <Route>
          <Route></Route>
        </Route>
      </Routes>
      <Footer />
    </main>
  )
}

export default App

