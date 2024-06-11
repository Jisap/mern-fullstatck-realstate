import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddProperty from './pages/AddProperty'
import Listing from './pages/Listing'
import Favourites from './pages/Favourites'
import Bookings from './pages/Bookings'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listing" element={<Listing />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  )
}
