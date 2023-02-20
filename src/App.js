import React from 'react';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer';
import Login from './pages/login/Login';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1536px' } }} m="auto" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;