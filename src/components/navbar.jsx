import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'; // Importar la hoja de estilos CSS

// Importar los iconos de React
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Here I define de navbar component

function CustomNavbar() {
    return (
        <nav>
            <ul>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>

            <div className="nav-icons">
                <a href="https://github.com/VicenteLavagnino" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaGithub />
                </a>
                <a href="mailto:vicente.lavagnino@uc.cl" className="nav-link">
                    <MdEmail />
                </a>

                <a href="https://www.linkedin.com/in/vicente-lavagnino-2b1b3a1a0/" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaLinkedin />
                </a>
                <a href="https://t.me/VicenteLavagnino" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaTelegram />
                </a>
            </div>
        </nav>
    );
}

export default CustomNavbar;
