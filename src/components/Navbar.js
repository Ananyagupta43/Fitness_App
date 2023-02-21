import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import Logo from '../assets/images/fitness_logo.png'
import NewLogo from '../assets/images/exercisopedia.jpeg'


const Navbar = () => {
  return (
    // <div>Navbar</div>
    <Stack
      direction="row"
      backgroundColor="black"
      width="100%"
      justifyContent="none"
      sx={{ gap: { sm: '100px', xs: '40px' } }}>
      <Link to="/">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={NewLogo} alt="Paris" style={{ width: '190px', height: '80px' }} />
            </div>
            <div class="flip-box-back">
              <img src={Logo} alt="logo" style={{
                width: '190px', height: '80px'
              }} />
            </div>
          </div>
        </div>

      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end">
        <Link to="/" className="hoverLink" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid grey', cursor: 'pointer', }}>Home</Link> {/* //root link */}
        <a href="#exercises" className="hoverLink" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', }}>Exercises</a> {/*  link other than root */}
      </Stack>
    </Stack>
  )
}

export default Navbar;