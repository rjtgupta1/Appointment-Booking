import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const btnStyle = {
  color:'#fff',
  fontFamily:'Arial',
  textDecoration: 'none',
  borderTopRightRadius:'35%',
  borderBottomLeftRadius:'35%',
  background: '#1976f9',
  height:'auto',
  width:'auto',
  textAlign:'center',
  border: '2px solid #fff',
  padding:'10px'
}

const Navbar = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1,marginBottom:'45px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} style={{textDecoration:'none',color:'#fff'}} >Book Appointment</Link>
          </Typography>
        <Link to={'/check-status'} style={btnStyle}>Check Status</Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar