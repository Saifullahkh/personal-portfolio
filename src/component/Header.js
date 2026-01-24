import React, { useState, useEffect } from 'react';
import '../App.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg  ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="container px-md-5">
        <a className="navbar-brand fw-bold" href="#home">
          SAIF <span className="text-teal-accent">ULLAH</span>
        </a>
        
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{borderColor: 'white'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-md-center">
            {['Home', 'About', 'Skill', 'Project'].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link px-3" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-md-0 mt-2">
              <a href="#contact" className="btn-nav-cta">Let's Talk</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;