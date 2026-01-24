import React from 'react';
import '../App.css';
import { projects } from '../data/data';
import Slider from "react-slick";
import { FiArrowRight, FiGlobe } from 'react-icons/fi';

function Project() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="project-section py-5" id="project">
      <div className="project-bg-shape"></div>

      <div className="container py-5">
        {/* Heading */}
        <div className="row mb-5 align-items-end">
          <div className="col-md-8">
            <h6 className="text-teal fw-bold text-uppercase mb-2" style={{ letterSpacing: '3px' }}>
              My Works
            </h6>
            <h2 className="display-5 fw-bold text-dark">
              Crafting Digital <span className="text-teal">Experiences</span>
            </h2>
          </div>

          <div className="col-md-4 text-md-end d-none d-md-block">
            <p className="text-muted small">
              Explore my latest projects built with precision and modern tech stacks.
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="slider-wrapper">
          <Slider {...settings} className="custom-slider">
            {projects.map((project) => (
              <div key={project.id} className="slide-item">
                <div className="glass-project-card">
                  
                  <div className="card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-main"
                    />
                  </div>

                  <div className="card-content-wrapper p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 className="fw-bold project-title m-0">
                        {project.title}
                      </h4>

                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="link-circle"
                      >
                        <FiGlobe />
                      </a>
                    </div>

                    <p className="project-desc-text text-muted">
                      {project.description.substring(0, 100)}...
                    </p>

                    <hr className="my-4 opacity-25" />

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-modern-link"
                    >
                      Explore Project
                      <FiArrowRight className="ms-2 arrow-icon" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}

export default Project;
