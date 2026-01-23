import React from 'react'
import Typewriter from 'typewriter-effect';
import { FiDownload } from 'react-icons/fi';
import '../App.css';
import saif from '../assets/saif.jpg';
import SocialIcons from '../component/SocialIcons';

function Home() {
  return (
    <section className="hero-section d-flex align-items-center" id='home'>
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          
          {/* Text Content - Order 2 on Mobile for better UX */}
          <div className="col-lg-7 ps-lg-5 order-2 order-lg-1 mt-5 mt-lg-0">
            <h5 className="text-uppercase tracking-wider text-teal fw-bold mb-3">Welcome to my world</h5>
            <h1 className="hero-title mb-2">
              Hi, I'm <span className="gradient-text">Saif Ullah Khan</span>
            </h1>
            <h2 className="typewriter-container mb-4">
              <span className="me-2">And I'm a</span>
              <span className="type-writer">
                <Typewriter
                  options={{
                    strings: ['Frontend Developer', 'Reactjs Developer'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                  }}
                />
              </span>
            </h2>

            <p className="hero-description text-muted mb-4">
              I build high-performance, interactive, and user-centric web applications. 
              Specializing in turning complex problems into elegant digital solutions with modern frontend technologies.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-4 mt-5">
               <SocialIcons />
               <div className="divider d-none d-sm-block"></div>
              <a href="/cv/saif-cv.pdf" download className="btn-download-wrapper">
  <span className="btn-download-text">Download CV</span>
  <span className="btn-download-icon">
    <FiDownload />
  </span>
</a>
            </div>
          </div>

          {/* Profile Image - Order 1 on Mobile */}
          <div className="col-lg-5 text-center order-1 order-lg-2">
            <div className="hero-img-wrapper">
              <img
                src={saif}
                alt="Saif Ullah Khan"
                className="img-fluid hero-img"
              />
              <div className="blob-shape"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;