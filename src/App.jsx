import { Routes, Route } from 'react-router-dom'
import ScrollNavigationMenu from './components/scroll-navigation-menu'
import { Footer } from './components/ui/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CallForPaper from './pages/CallForPaper'
import GuestLecturers from './pages/GuestLecturers'
import Gallery from './pages/Gallery'
import Test from './pages/Test'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollNavigationMenu />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/callforpaper" element={<CallForPaper />} />
          <Route path="/guestlecturers" element={<GuestLecturers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <Footer />
      </div>
  )
}

export default App
