import React from 'react'
import './App.css'

import Register from './components/Register/Register'
import Pin from './components/Register/Pin'

// Importing dependencies
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import { AuthContextProvider } from './components/Context/AuthContext';


function App() {

  return (
    <Router>
        <div className="app">
          <AuthContextProvider>
            <Routes> 
              <Route path='/register' element={<Register />}/>
              <Route path='/' element={<Pin />}/>
            </Routes>
          </AuthContextProvider>
        </div>
    </Router>
  )
}

export default App
