import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Footer } from './components/ui/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CallForPaper from './pages/CallForPaper'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/callforpaper" element={<CallForPaper />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
