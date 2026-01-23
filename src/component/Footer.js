import React from 'react'
import SocialIcons from '../component/SocialIcons';
import '../App.css';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern mt-5 py-5">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          
          {/* Social Icons Section */}
          <div className="mb-3">
            <SocialIcons />
          </div>

          {/* Copyright Text */}
          <div className="footer-bottom-text">
            <p className="mb-0 text-muted small">
              © {currentYear} . All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer