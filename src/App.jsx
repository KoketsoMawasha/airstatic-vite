import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import PageNotFound from './pages/PageNotFound'
import EventDetails from './pages/EventDetails'
import PastEvents from './components/PastEvents'
import FutureEvents from './components/FutureEvents'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="events" element={<Events/>}>
          <Route path='future' element={<FutureEvents/>}></Route>
          <Route path='past' element={<PastEvents/>}></Route>
        </Route>
        <Route path="event-details" element={<EventDetails/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
