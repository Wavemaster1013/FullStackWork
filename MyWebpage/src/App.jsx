// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
{/*import Project from './pages/Projects'
import Contact from './pages/Contact'*/}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/*<Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>*/}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App