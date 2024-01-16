import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Events from './components/Events'
import EventsDetails from './components/EventsDetails'
import NewEvent from './components/NewEvent'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventsDetails />} />
        <Route path="/events/new" element={<NewEvent />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App
