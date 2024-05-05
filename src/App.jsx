import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Resultat from './pages/Resultat'
import StudyReason from './pages/StudyReason'
import Methodology from './pages/Methodology'
import Histoire from './pages/Perspectives'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './components/structural/Layout'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resultat" element={<Resultat />} />
          <Route path="/studyreason" element={<StudyReason />} />
          <Route path="/methodology" element={<Methodology />} /> 
          <Route path="/perspective" element={<Histoire />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
