import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'stack', 'projects', 'milestones', 'contact'];
      let current = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '/about', href: '#about' },
    { name: '/stack', href: '#stack' },
    { name: '/projects', href: '#projects' },
    { name: '/milestones', href: '#milestones' },
    { name: '/contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="mono text-gradient">{'</Nehalika>'}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`nav-link mono ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Resume</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav glass"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`mobile-nav-link mono ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ margin: '16px' }}>Resume</a>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
