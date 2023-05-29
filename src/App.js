import logo from './logo.svg';
import './App.css';

// Navbar import
import React from 'react';
import CustomNavbar from './components/navbar';

// Route import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/NotFound';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="App-footer">
          <div className="footer-content">
            {/* Contenido de la barra inferior */}
            <p>Built with ❤️ by <a href="https://github.com/VicenteLavagnino">VicenteLavagnino</a></p>
            Check the repository <a href="https://github.com/VicenteLavagnino/VicenteLavagnino.github.io">here</a>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
