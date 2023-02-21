import React from 'react'
import {Box,Stack,Typography,Button}  from '@mui/material';
import { createTheme } from '@mui/material/styles';
import BannerImage from '../assets/images/trial4.png'

const FitnessBanner = () => {
  return (
    <Stack> <img src={BannerImage} className="hero-banner-img"/></Stack>
  )
}

export default FitnessBanner