// src/components/Header.js
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'research', label: 'Research' },
        // { id: 'blog', label: 'Blog' },
        // { id: 'ta-resources', label: 'TA Resources' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="nav-brand">
                    <h1>Sai Manohar Vemuri</h1>
                    <p>PhD Computer Science and Engineering</p>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    className={activeSection === item.id ? 'active' : ''}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="social-links">
                    <a href="https://github.com/vemuri02" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/vemuri02" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:svemuri6@hawk.illinoistech.edu">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <ul>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    className={activeSection === item.id ? 'active' : ''}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;