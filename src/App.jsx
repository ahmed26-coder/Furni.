import './App.css'
import {Routes, Route } from "react-router-dom";
import Home from './Home/home'
import About from './home/About'
import Nav from './Components/Nav'
import Servisec from './home/Servisec'
import Blog from './home/Blog'
import Contact from './home/Contact'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Servisec" element={<Servisec />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App
