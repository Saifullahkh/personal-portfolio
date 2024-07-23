import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Contact() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, subject, email, city, country)
  }

  return (
    <Box sx={{py: 5,}} id='contact'>
        <Box sx={{ mt:8, mx:'20%', width: '60%', justifyContent: 'center', my:2 ,  '@media (max-width: 600px)': {width: '90%', mx: '4%'}}} component='form' onSubmit={handleForm} >
            <Typography sx={{fontSize: '35px', fontWeight: 'bold', textAlign: 'center', pb:4}}>Contact <span style={{color: '#5982f4'}}>Me</span> </Typography>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='First Name'
                        name='firstname' 
                        fullWidth 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                        InputLabelProps={{style: {color: 'white'}}}
                        inputProps= {{ style: {color: 'white', backgroundColor: '#454e67'}}}
                      />
                </Grid>
                <Grid item xs={12} sm={6} color='white'>
                    <TextField 
                        label='Last Name'
                        name='lastname'
                        className='grid1' 
                        fullWidth  
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        InputLabelProps={{style: {color: 'white'}}}
                        inputProps= {{ style: {color: 'white', backgroundColor: '#454e67'}}}
                      />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label='Email'
                        name='email' 
                        className='grid1'
                        fullWidth  
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        InputLabelProps={{style: {color: 'white'}}}
                        inputProps= {{ style: {color: 'white', backgroundColor: '#454e67'}}}
                      />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label='Subject'
                        name='subject' 
                        className='grid1'
                        fullWidth 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        InputLabelProps={{style: {color: 'white'}}}
                        inputProps= {{ style: {color: 'white', backgroundColor: '#454e67'}}}
                      />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='City'
                        name='city' 
                        className='grid1'
                        fullWidth 
                        value={city}
                        onChange={(e) => setCity(e.target.value)} 
                        InputLabelProps={{style: {color: 'white'}}}
                        inputProps= {{ style: {color: 'white', backgroundColor: '#454e67'}}}
                      />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        label='Country'
                        name='country' 
                        className='grid1'
                        fullWidth  
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        InputLabelProps={{style: {color: 'white'}}}
                        inputProps= {{ style: {color: 'white', backgroundColor: '#454e67'}}}
                      />
                </Grid>
                
            </Grid>
            <Typography sx={{textAlign: 'center', my:4}}>
               <Button type='submit' variant='contained' sx={{textAlign: 'center',color: '#262840'}}>Send Message</Button>
            </Typography>
        </Box>      
    </Box>
  )
}

export default Contact
