import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Home'
import Navbar from './Components/NavBar'
import Home from './Components/Home'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
