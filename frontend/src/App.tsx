import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar.tsx'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/' />
        <Route path='/' />
      </Routes>
    </Router>
  )
}

export default App

