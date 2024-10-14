import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Login } from './components/Login'

const App: React.FC = () => {
  return (
    <main className='max-w-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Hero />} />
          <Route path='/' />
        </Routes>
      </Router>
    </main>
  )
}

export default App

