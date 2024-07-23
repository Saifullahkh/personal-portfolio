import { Box, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material'
import React, {useEffect} from 'react'
import { FeatureList } from '../data/data'
import '../style/Feature.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Feature() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
     <Box sx={{my:8, py: 8}} id='services'>
        <Typography sx={{fontSize: '35px',fontWeight: 'bold', textAlign: 'center', pb: 5}}>My <span style={{color: '#5982f4'}}>Services</span> </Typography>
        
        <Box className='slide-up' sx={{display:'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', rowGap: 5}}>
            {
                FeatureList.map((item) => {
                    return(
                    <Box data-aos='zoom-in' className='box'>
                        <Card  sx={{width: '330px', height:'400px', bgcolor: '#454e67', }}>
                            <CardMedia sx={{textAlign: 'center', fontSize: '35px', color: '#262840 !important', pt:3}}>{item.Icon}</CardMedia>
                            <CardContent>
                                <Typography sx={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center',color: '#fff'}} gutterBottom>{item.title}</Typography>
                                <Typography variant='p' sx={{textAlign: 'center', fontFamily: 'Nunito',color: '#fff'}}>{item.text}</Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Button variant='contained' sx={{color: '#262840',}}>Read More</Button>
                            </CardActions>
                        
                        </Card>
                        <Card className='overlay' sx={{width: '330px'}}>
                            <CardMedia sx={{textAlign: 'center', fontSize: '35px', color: '#262840' , pt:3}}>{item.Icon}</CardMedia>
                            <CardContent >
                                <Typography sx={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center'}} gutterBottom>{item.title}</Typography>
                                <Typography variant='p' sx={{textAlign: 'center', fontFamily: 'Nunito'}}>{item.text}</Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Button variant='contained' sx={{color: '#262840',}}>Read More</Button>
                            </CardActions>
                        </Card>
                       </Box> 
                    )
                })
            }
        </Box>
     </Box> 
    </>
  )
}

export default Feature
