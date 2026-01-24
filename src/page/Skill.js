import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import '../App.css';
import { MdPalette } from 'react-icons/md';

function Skill() {
   const skills = [
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#777' }, // White color for dark theme
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#aee9e6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'Material UI', icon: <MdPalette />, color: '#007FFF' },
];


    return (
        <section className="skill-section py-5" id='skill'>
            <div className="container py-4">
                <div className="text-center mb-5">
                    <span className="badge-tech mb-2">My Expertise</span>
                    <h2 className="skill-title fw-bold">Tech <span className="text-primary-gradient">Stack</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card-pro" key={index}>
                            <div className="icon-box" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h5 className="skill-label">{skill.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;