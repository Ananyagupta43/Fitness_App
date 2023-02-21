import React,{useState} from 'react'
import { Box } from '@mui/system';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner/HeroBanner';

const Home = () => {
  return (
  <Box>
   <HeroBanner />
  <SearchExercises/>
   <Exercises/>

  </Box>
  )
}

export default Home;