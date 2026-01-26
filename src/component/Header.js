import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import '../App.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="container px-md-5">
        <a className="navbar-brand fw-bold" href="#home">
          SAIF <span className="text-accent">ULLAH</span>
        </a>
        
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <HiX className="toggle-icon" />
          ) : (
            <HiMenuAlt3 className="toggle-icon" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center ">
            {['Home', 'About', 'Skill', 'Project'].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link px-3" 
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 my-3 my-lg-0">
              <a href="#contact" className="btn-nav-cta" onClick={closeMenu}>
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;