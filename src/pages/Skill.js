import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import '../style/Skill.css'
import { FaReact,FaCss3, FaHtml5, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiMui } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skill() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Box data-aos='fade-up' data-aos-duration='3000' id='skill' sx={{my:3}}>
        <Box sx={{textAlign: 'center', py:5, '@media (max-width: 600px)': {py: 2}}}>
            <Typography sx={{fontSize: '35px', fontWeight: 'bold', '@media (max-width: 600px)': {fontSize: '30px'}}}>Our <span style={{color: '#5982f4'}}>Skills</span> </Typography>
            <Typography>We have been working with some skills.</Typography>
        </Box> 
        <Box>
            <ul className='user-skill'>
              <li><FaReact /></li>
              <li><RiTailwindCssFill /></li>
              <li><DiJavascript /></li>
              <li><FaCss3 /></li>
              <li><FaHtml5 /></li>
              <li><FaBootstrap /></li>
              <li><SiMui /></li>
              <li><FaGithub /></li>
            </ul>
        </Box>
      </Box>
    </>
  )
}

export default Skill
