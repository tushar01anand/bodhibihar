import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Itinerary from './pages/Itinerary'
import Stays from './pages/Stays'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/stays" element={<Stays />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App