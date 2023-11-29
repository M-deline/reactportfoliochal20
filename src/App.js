import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;