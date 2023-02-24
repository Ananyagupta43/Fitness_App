import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import Logo from '../assets/images/fitness_logo.png'
import NewLogo from '../assets/images/exercise_pedia.png'


const Navbar = () => {
  return (
    // <div>Navbar</div>
    <Stack
      direction="row"
      backgroundColor="transparent"
      width="100%"
      justifyContent="none"
      sx={{ gap: { sm: '50px', xs: '40px' } }}>
      <Link to="/">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={NewLogo} alt="Paris" style={{ width: '150px', height: '110px' }} />
            </div>
            <div className="flip-box-back">
              <img src={NewLogo} alt="logo" style={{
                width: '150px', height: '110px'
              }} />
            </div>
          </div>
        </div>

      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        fontWeight="500"
        alignItems="flex-end">
        <Link to="/" className="hoverLink" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid grey', cursor: 'pointer', }}>Home</Link> {/* //root link */}
        <a href="#exercises" className="hoverLink" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', }}>Exercises</a> {/*  link other than root */}
      </Stack>
    </Stack>
  )
}

export default Navbar;