import React from 'react'
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../App.css'; // Iske liye alag CSS file behtar hai

function SocialIcons() {
  const socials = [
    { id: 1, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/saifullahkh/", name: "LinkedIn" },
    { id: 2, icon: <FaGithub />, link: "https://github.com/saifullahkh", name: "GitHub" },
    { id: 3, icon: <FaFacebookF />, link: "#", name: "Facebook" },
    { id: 4, icon: <FaInstagram />, link: "#", name: "Instagram" },
  ];

  return (
    <div className="social-container d-flex gap-3 align-items-center">
      {socials.map((social) => (
        <a 
          key={social.id}
          href={social.link} 
          className="social-icon-wrapper" 
          aria-label={social.name}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="icon-box">
            {social.icon}
          </div>
          <span className="tooltip-text text1">{social.name}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialIcons;