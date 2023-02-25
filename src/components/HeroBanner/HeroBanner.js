import React, { useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import anime from 'animejs';
import styles from './HeroBanner.css';
import Navbar from '../Navbar.js';
const HeroBanner = () => {
  return (
    <Box
      className="box-container"  >
        <Navbar/>
      <Stack direction="row" gap="30%">
        <Stack className="contents-bar">
          <Typography fontWeight="700" className="main-txt mid-txt"
            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
            color="#85C1E9">
            FITNESS <span className="main-txt first-txt">FIRST</span>
          </Typography>
        </Stack>
        <Stack className="ani-text main-txt">
          <Typography
            color="#85C1E9"
            fontSize="22px"
            lineHeight="100px"
            className="ml12">
            GO <br /> SWEAT <br /> SMILE<br /> REPEAT
          </Typography>
          {/* <Button variant="contained" className="button-start"
          href="#exercises">Explore</Button> */}

        </Stack>
      </Stack>
      <Stack className="button-st">
        <Button variant="contained" className="button-end"
          href="#exercises">Explore</Button>
      </Stack>
    </Box>

  )
}

export default HeroBanner