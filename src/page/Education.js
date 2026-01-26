import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import '../App.css';

function Education() {
  const educationData = [
    {
      year: '2020 - 2024',
      degree: 'BSCS – Bachelor of Computer Science',
      institution: 'University of Engineering & Technology, Taxila',
      description: 'Completed a Bachelor\'s degree in Computer Science with a focus on programming, databases, and web development.',
      icon: <FaGraduationCap />,
      color: '#5b21b6'
    },
    {
      year: '2018 - 2020',
      degree: 'F.Sc – Faculty of Science',
      institution: 'Punjab College, Rawalpindi',
      description: 'Completed intermediate education with a science background, building a strong foundation in analytical and problem-solving skills.',
      icon: <MdSchool />,
      color: '#7c3aed'
    }
  ];

  return (
    <section className="education-minimal-section py-5" id="education">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="minimal-badge">My Journey</span>
          <h2 className="minimal-title">Education</h2>
        </div>

        <div className="minimal-timeline-container">
          <div className="minimal-timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <div className="minimal-timeline-item" key={index}>
              <div className="minimal-timeline-marker" style={{ backgroundColor: edu.color }}>
                <div className="marker-dot"></div>
              </div>
              
              <div className="minimal-timeline-content">
                <span className="minimal-year-badge" style={{ backgroundColor: edu.color }}>
                  {edu.year}
                </span>
                
                <div className="minimal-education-card">
                  <h3 className="minimal-degree-title">{edu.degree}</h3>
                  <p className="minimal-institution">{edu.institution}</p>
                  <p className="minimal-description">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;