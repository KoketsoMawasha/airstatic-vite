import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

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
        <Route path="/" element={<Home/>} />
        <Route path='events/future/:id' element={<EventDetails />}/>
        <Route path='events/past/:id' element={<EventDetails />}/>
        <Route path="events" element={<Events/>}>
          <Route index element={<Navigate to={'future'} replace={true} />}></Route>
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
