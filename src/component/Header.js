import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider, Link } from '@mui/material'
import '../style/Header.css'
import { IoMenu } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import InfoIcon from '@mui/icons-material/Info';
import { BiSolidContact } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { BsLayersFill } from "react-icons/bs";


function Header() {
    const [mobileOpen, setMobileOpen] = useState('')


    const handleDrawerToggler = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggler} sx={{bgcolor: '#191f36',height: '900px'}}>
            <Typography variant='h4' sx={{fontWeight: 'bold', py: 2, color: 'white', '@media (max-width: 600px)': { flexGrow: 1}}}>
                Port<span style={{color: '#5982f4'}}>folio</span>
            </Typography>
            <Divider />
            <Box sx={{mx:'auto', display:{xs: 'block', sm: 'none'}}}>
                <ul className='mobile-menu'>
                    <li>
                        <span><AiFillHome /></span>
                        <Link href='#home' active>Home</Link>
                    </li>
                    <li>
                        <span>{<InfoIcon />}</span>
                        <Link href='#about'>About</Link>
                    </li>
                    <li>
                        <span><BsLayersFill /></span>
                        <Link href='#skill'>Skill</Link>
                    </li>
                    <li>
                        <span><FaServicestack /></span>
                        <Link href='#services'>Services</Link>
                    </li>
                    <li>
                        <span><FaDiagramProject /></span>
                        <Link href='#project'>Project</Link>
                    </li>
                    <li>
                        <span><BiSolidContact /></span>
                        <Link href='#contact'>Contact</Link>
                    </li>
                </ul>
            </Box>
        </Box>
    )
  return (
    <>
        <Box>
            <AppBar sx={{bgcolor: '#191f36 ',boxShadow: 'none'}}>
                <Toolbar>
                    <Typography variant='h4' sx={{fontWeight: 'bold', color: 'white', '@media (max-width: 600px)': { flexGrow: 1}}}>
                        Port<span style={{color: '#5982f4'}}>folio</span>
                    </Typography>
                    <Box sx={{mx:'auto', display:{xs: 'none', sm: 'block'}}}>
                      <ul className='navigation-menu'>
                        <li>
                           <Link href='#home'>Home</Link>
                        </li>
                        <li>
                           <Link href='#about'>About</Link>
                        </li>
                        <li>
                            <Link href='#skill'>Skill</Link>
                        </li>
                        <li>
                            <Link href='#services'>Services</Link>
                        </li>
                        <li>
                            <Link href='#project'>Project</Link>
                        </li>
                        <li>
                            <Link href='#contact'>Contact</Link>
                        </li>
                      </ul>
                    </Box>
                    <IconButton
                        aria-label='open drawer'
                        edge='start'
                        sx={{display: {sm:'none'}}}
                        onClick={handleDrawerToggler}
                     >
                        <span style={{color: '#5982f4'}}><IoMenu /></span>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer 
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggler}
                    sx={{display: {xs: 'block', sm: 'none'},textAlign: 'center' , "& .MuiDrawer-paper": {
                    boxSizing: 'border-box',
                    width: '210px'
                    },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />
        </Box> 
    </>
  )
}

export default Header
