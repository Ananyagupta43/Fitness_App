import React, { useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import FitnessBanner from '../FitnessBanner';
import anime from 'animejs';
import styles from './HeroBanner.css';
const HeroBanner = () => {

  useEffect(() => {
    const textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
      });
  }, []);




  return (
    <Box
      className="box-container"  >
      <Stack direction="row">
        <FitnessBanner></FitnessBanner>

        <Stack className="contents-bar">
          <Typography color="white" fontWeight="600" fontSize="35px" className="main-txt" >
            Fitness First
          </Typography>
          <Typography fontWeight="700" className="main-txt"
            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
            color="#85C1E9"
          >
            Sweat, Smile And Repeat
          </Typography>
          <Typography
            color="#85C1E9"
            fontSize="22px"
            lineHeight="35px"
            mb="20px"
            className="ml12">
            Start your fitness journey with Exercisopedia.
          </Typography>
          <Button variant="contained" className="button-start"
            href="#exercises">Explore</Button>

        </Stack>
      </Stack>
    </Box>

  )
}

export default HeroBanner