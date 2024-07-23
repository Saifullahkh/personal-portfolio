import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react' 
import Slider from 'react-slick'
import { ProductList } from '../data/data'


function Project() {

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      }


  return (
    <>
     <Box id='project' sx={{my:3}}>
        <Typography sx={{fontSize: '35px', fontWeight: 'bold', textAlign: 'center', pb: 5}}>My <span style={{color: '#5982f4'}}>Project</span> </Typography>
           <Box sx={{columnGap: 4,}}>
            <Slider {...settings}>
                
                {
                    ProductList.map((item) => {
                        return(
                           <>
                           <Card sx={{width: '350px', mx: 'auto'}}>
                                <CardMedia component={'img'} src={item.image}/>
                                <CardContent sx={{bgcolor: '#454e67', color: '#fff', fontFamily: 'Nunito'}}>
                                    <Typography sx={{fontSize: '25px', fontWeight: 'bold'}}  gutterBottom>{item.title}</Typography>
                                    <Typography>{item.text}</Typography>
                                </CardContent>
                            </Card>
                           </>
                        )
                    })
                }
    
            </Slider>
        </Box>
     </Box> 
    </>
  )
}

export default Project
