import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Enunciado from './pages/Enunciado'

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    // <Router>
    <Router basename="/ufpr-monocular-restitution/">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/enunciado" element={<Enunciado />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}

export default App