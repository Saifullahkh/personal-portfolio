import { Box, Button, Grid, Typography } from '@mui/material'
import React, {useEffect} from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Saif1 from '../Assets/saif12.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center',height: '550px', px: 5,  '@media (max-width: 600px)': {px: 0, height: '850px'}}} id='home'>
        <Grid container>
            <Grid data-aos='fade-right' item xs={12} md={7} lg={7} order={{xs: 2, sm: 1, lg: 1}}>
                <Box sx={{px:7, mt:4, '@media (max-width: 600px)': {px:2}}}>
                    <Typography sx={{fontSize: '30px', fontWeight: 'bold', '@media (max-width: 600px)': {fontSize: '25px'}}}>
                        Hi, I' am <span style={{color: '#5982f4'}}>Saif Ullah</span>
                    </Typography>
                    <Typography sx={{fontSize: '25px' , '@media (max-width: 600px)': {fontSize: '22px'}}} gutterBottom>
                        a {' '}
                        <span style={{ color: '#5982f4', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={['Frontend Developer', 'Reactjs Developer', 'Website Designer']}
                        />
                        </span>
                    </Typography>
                    <Typography sx={{fontFamily: 'Nunito'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat reiciendis a fugit fugiat? Numquam similique modi, odio aliquid, aperiam fugiat dolor voluptate rerum rem autem quam officia esse impedit repellat aut illo sapiente distinctio expedita exercitationem possimus saepe adipisci?
                    </Typography>
                    <Button variant='contained' sx={{color: '#262840', mt:3}}>Download CV</Button>
                </Box>
            </Grid>
            <Grid data-aos='fade-left' item xs={12} md={5} lg={5} order={{xs: 1, sm: 2, lg: 2}}  >
              <img src={Saif1} alt="" style={{width: '300px', height: '300px', borderRadius: '50%', paddingLeft: '28px'}} />
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
