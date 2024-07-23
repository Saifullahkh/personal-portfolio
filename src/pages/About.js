import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Saif1 from '../Assets/saif1234.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
       <Box sx={{px:10, py:8, '@media (max-width: 600px)': {px:2, py: 3}}} id='about'>
        <Grid container>
            <Grid item lg={4} data-aos='fade-up-right' >
                <img src={Saif1} alt="" style={{width: '250px', height:'400px', justifyContent: 'center', border: '5px solid #5982f4'}} />
            </Grid>
            <Grid item lg={6}>
                <Box data-aos='fade-up-left' sx={{py: 8, fontFamily: 'Nunito' , '@media (max-width: 600px)': {py: 4}}}>
                  <Typography sx={{fontSize: '25px', fontWeight: 'bold'}}>About <span style={{color: '#5982f4'}}>Me</span> </Typography>
                  <Typography gutterBottom>Frontend Developer</Typography>
                  <Typography sx={{fontFamily: 'Nunito'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe aperiam enim dolores maxime sequi nobis, nihil quas perspiciatis tempora mollitia, reiciendis facilis omnis cum porro pariatur dicta aut dolorum illo assumenda vel esse eius necessitatibus. Dolorem dolore assumenda eum.
                  </Typography>
                  <Button variant='contained' sx={{mt:3, color: '#262840'}}>Read More</Button>
                </Box>
            </Grid>
        </Grid>
       </Box> 
    </>
  )
}

export default About
