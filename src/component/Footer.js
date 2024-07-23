import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"

function Footer() {
  return (
    <>
        <Box sx={{py: 3, px: 4, bgcolor: '#454e67'}}>
            <Grid container >
                <Grid item xs={12} sm={6} lg={5}>
                    <Box >
                        <Typography sx={{fontSize: '30px', fontWeight: 'bold'}} gutterBottom>Portfolio</Typography>
                        <Typography >
                            <span>Copyright &copy; 2024 Saif Ullah <br /> All right reserved</span><br />
                            <span></span>
                        </Typography>
                        <Box sx={{mt:5}}>
                            <ul className='icons'>
                                <li>
                                    <Link href="www.facebook.com"><FaFacebook /></Link>
                                </li>
                                <li>
                                    <Link href="www.instagram.com"><FaInstagram /></Link>
                                </li>
                                <li>
                                    <Link href="www.twitter.com"><FaTwitter /></Link>
                                </li>
                                <li>
                                    <Link href="www.linkedin.com/in/saif-ullah-khan-9a1b9c9"><FaLinkedin /></Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={2}>
                    <Box>
                        <Typography sx={{fontSize: '25px', fontWeight: 'bold', '@media (max-width: 600px)': { mt:2 }}}>Company</Typography>
                        <Box>
                            <ul className='menu'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Skill</li>
                                <li>Services</li>
                                <li>Project</li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={2}>
                    <Box>
                        <Typography sx={{fontSize: '25px', fontWeight: 'bold',  '@media (max-width: 600px)': { mt:2 }}}>Support</Typography>
                        <Box>
                            <ul className='menu'>
                                <li>Help center</li>
                                <li>Term of service</li>
                                <li>Legal</li>
                                <li>Pravicy policy</li>
                                <li>Status</li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                        <Typography sx={{fontSize: '25px', fontWeight: 'bold',  '@media (max-width: 600px)': { mt:2 }}}>Address</Typography>
                        <Typography>
                            <span style={{fontWeight: 'bold', fontSize: '18px'}}><MdEmail /> : </span>atifullahkhan47@gmail.com
                        </Typography>
                        <Typography>
                            <span style={{fontWeight: 'bold', fontSize: '18px'}}><FaPhone /> : </span>+92 3359199919
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box> 
    </>
  )
}

export default Footer
