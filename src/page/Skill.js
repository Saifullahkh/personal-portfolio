import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import '../App.css';
import { MdPalette } from 'react-icons/md';

function Skill() {
   const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
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

                <div className="skills-orbit-container">
                    <div className="center-skill">
                        <h4 className="center-title">Skills</h4>
                    </div>

                    {skills.map((skill, index) => (
                        <div className="skill-orbit" key={index} style={{ '--i': index }}>
                            <div className="skill-card-orbit" style={{ '--skill-color': skill.color }}>
                                <div className="icon-box" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <h5 className="skill-label">{skill.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;