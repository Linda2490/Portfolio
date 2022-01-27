import React from 'react'
import './App.css'
import Pages from './Pages'
import AllWorks from './AllWorks'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Logo from './PortfolioContainer/logoMW/Logo'
import Navbar from './PortfolioContainer/Navbar/Navbar'
function App() {
  return (
    
    <Router>
    
    <Routes>
    <Route exact path='/' element={<Pages/>}/>
    <Route path='/allworks' element={<AllWorks/>}/>
    </Routes>
    
    </Router>
    
  )
}

export default App
