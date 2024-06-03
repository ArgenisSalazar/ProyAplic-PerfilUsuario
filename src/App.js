import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Admission from './pages/Admission';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/admission" element={<Admission />} />
          </Routes>
        </div>
        <footer>
          {/* Contenido del footer */}
        </footer>
      </Router>
    </div>
  );
}

export default App;