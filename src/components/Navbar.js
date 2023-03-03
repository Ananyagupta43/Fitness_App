import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import Logo from '../assets/images/fitness_logo.png'
import NewLogo from '../assets/images/exercise_pedia.png'
import { Modal, Button, Form } from "react-bootstrap";


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
              <img src={NewLogo} alt="Paris" style={{ width: '150px', height: '90px' }} />
            </div>
            <div className="flip-box-back">
              <img src={NewLogo} alt="logo" style={{
                width: '150px', height: '90px'
              }} />
            </div>
          </div>
        </div>

      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        fontWeight="500"
        alignItems="flex-end">
        <Link to="/" className="hoverLink" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid grey', cursor: 'pointer', }}>Home</Link> {/* //root link */}
        <a href="exercises" className="hoverLink" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', }}>Exercises</a> {/*  link other than root */}
      </Stack>

      <Stack direction="row"
        gap="40px"
        fontSize="20px"
        fontWeight="500"
        alignItems="flex-end">
        <a href="#login" className="hoverLink" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', }}>Login</a> {/*  link other than root */}
        <a href="#sign-up" className="hoverLink" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', }}>Sign Up</a> {/*  link other than root */}
      </Stack>

    </Stack>
  )
}

export default Navbar;