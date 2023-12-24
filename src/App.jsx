import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="events" element={<Events/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
